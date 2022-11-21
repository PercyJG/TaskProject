import { connect } from "react-redux";
import { Component } from "react";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../store/models/actions";
import { AppState } from "../../store/rootStore";
import { Task } from "../../store/task/models/Task";
import {
  GetRequestTasks,
  PutChangeTastStatus,
  DeleteTaskStatus,
  PutEditTaskStatus,
} from "../../store/task/TaskAction";
import { styled } from "@mui/material/styles";

import CustomizedDialogs from "./EditTaskForm";
import style from "./TaskList.module.css";
import {
  Paper,
  StylesProvider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { tableCellClasses } from "@mui/material";

interface props {}

interface LinkStateProps {
  tasks: Task[];
}

interface LinkDispatchProps {
  GetRequestTasks: () => void;
  PutChangeTastStatus: (id: string) => void;
  DeleteTaskStatus: (id: string) => void;
  PutEditTaskStatus: (task: Task) => void;
}

type LinkProps = props & LinkStateProps & LinkDispatchProps;

const mapStateProps = (state: AppState): LinkStateProps => ({
  tasks: state.TaskReducer.tasks,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, {}, AppActions>
) => ({
  GetRequestTasks: bindActionCreators(GetRequestTasks, dispatch),
  PutChangeTastStatus: bindActionCreators(PutChangeTastStatus, dispatch),
  DeleteTaskStatus: bindActionCreators(DeleteTaskStatus, dispatch),
  PutEditTaskStatus: bindActionCreators(PutEditTaskStatus, dispatch),
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey[500],
    color: theme.palette.common.black,
    border: "2px solid" + theme.palette.common.black,
    padding: "5px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: "2px solid" + theme.palette.common.black,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: "2px solid" + theme.palette.common.black,
  },
}));

class TaskList extends Component<LinkProps> {
  componentDidMount() {
    this.props.GetRequestTasks();
  }
  changeTaskStatus(id: string) {
    this.props.PutChangeTastStatus(id);
  }
  eraseTask(id: string) {
    this.props.DeleteTaskStatus(id);
  }
  updateTask(task: Task) {
    this.props.PutChangeTastStatus(task.id);
  }

  render() {
    const { tasks } = this.props;
    return (
      <>
        <StylesProvider injectFirst>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell className={style.tableCell_center}>
                    Completed
                  </StyledTableCell>
                  <StyledTableCell>Task title</StyledTableCell>
                  <StyledTableCell>Due Date</StyledTableCell>
                  <StyledTableCell>Created</StyledTableCell>
                  <StyledTableCell className={style.tableCell_center}>
                    Edit
                  </StyledTableCell>
                  <StyledTableCell className={style.tableCell_center}>
                    Delete
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tasks.map((task: Task) => (
                  <StyledTableRow key={task.id}>
                    <StyledTableCell className={style.tableCell_center}>
                      <input
                        className={style.check_box}
                        type="checkbox"
                        checked={task.checked}
                        onChange={() => this.changeTaskStatus(task.id)}
                      />
                    </StyledTableCell>
                    <StyledTableCell>{task.title}</StyledTableCell>
                    <StyledTableCell>{task.due_date}</StyledTableCell>
                    <StyledTableCell>{task.create_date}</StyledTableCell>
                    <StyledTableCell className={style.tableCell_center}>
                      <CustomizedDialogs task={task} />
                    </StyledTableCell>
                    <StyledTableCell
                      className={`${style.tableCell_center} ${style.edit_button}`}
                      onClick={() => this.eraseTask(task.id)}
                    >
                      Del
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div id="editTaskForm"></div>
        </StylesProvider>
      </>
    );
  }
}

export default connect(mapStateProps, mapDispatchToProps)(TaskList);
