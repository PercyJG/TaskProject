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
} from "../../store/task/TaskAction";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import EditTaskButton from "./EditTaskButton";

interface props {}

interface LinkStateProps {
  tasks: Task[];
}

interface LinkDispatchProps {
  GetRequestTasks: () => void;
  PutChangeTastStatus: (id: string) => void;
  DeleteTaskStatus: (id: string) => void;
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
});

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

  render() {
    const { tasks } = this.props;
    return (
      <>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Completed</TableCell>
                <TableCell>Task title</TableCell>
                <TableCell>Due Date</TableCell>
                <TableCell>Created</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task: Task) => (
                <TableRow key={task.id}>
                  <TableCell>
                    <input
                      type="checkbox"
                      checked={task.complete}
                      onChange={() => this.changeTaskStatus(task.id)}
                    />
                  </TableCell>
                  <TableCell>{task.title}</TableCell>
                  <TableCell>{task.due_date}</TableCell>
                  <TableCell>{task.create_date}</TableCell>
                  <TableCell>
                    <a href={`/${task.id}`}>Edit</a>
                  </TableCell>
                  <TableCell>
                    <EditTaskButton editTask={task} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div id="editTaskForm"></div>
      </>
    );
  }
}

export default connect(mapStateProps, mapDispatchToProps)(TaskList);
