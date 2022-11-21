import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { TextFieldElement } from "../FormElements/TextFieldElement";
import { DatedElement } from "../FormElements/DateElement";
import { Task } from "../../store/task/models/Task";
import { AppState } from "../../store/rootStore";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { AppActions } from "../../store/models/actions";
import { connect } from "react-redux";
import {
  GetRequestTasks,
  PutChangeTastStatus,
  DeleteTaskStatus,
  PutEditTaskStatus,
} from "../../store/task/TaskAction";
import { Checkbox } from "@material-ui/core";
import style from "./EditTaskForm.module.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}
interface props {
  task: Task;
}

interface LinkStateProps {
  tasks: Task[];
}

interface LinkDispatchProps {
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

function CustomizedDialogs(props: LinkProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const updateTask = (task: Task) => {
    props.PutEditTaskStatus(task);
    setOpen(false);
  };

  const onChangeTask = () => {
    debugger;
    props.task.checked = !props.task.checked;
  };

  return (
    <div>
      <Button
        className={style.edit_button}
        variant="outlined"
        onClick={handleClickOpen}
      >
        Edit
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className={style.form_container}>
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            Edit Task
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Formik
              initialValues={{
                id: props.task.id,
                title: props.task.title,
                due_date: props.task.due_date,
                create_date: props.task.create_date,
                checked: props.task.checked,
              }}
              validationSchema={Yup.object().shape({
                id: Yup.string(),
                title: Yup.string()
                  .max(50, "Must be 50 characters or less")
                  .required("Title required"),
                due_date: Yup.string().required("Due date required"),
                create_date: Yup.string(),
                checked: Yup.boolean().required("required"),
              })}
              onSubmit={(values, { resetForm }) => {
                updateTask(values);
                resetForm();
              }}
            >
              {({ values }) => (
                <Form>
                  <div className={style.edit_form_component}>
                    <label>Task Title:</label>
                    <Field
                      name="title"
                      placeholder="Title of the task"
                      component={TextFieldElement}
                    />
                  </div>
                  <div className={style.edit_form_component}>
                    <label>Due Date:</label>
                    <Field name="due_date" component={DatedElement} />
                  </div>
                  <div className={style.edit_form_component_center}>
                    <Field as={Checkbox} name="checked" />
                    <label>Completed</label>
                  </div>
                  <div className={style.form_button_section}>
                    <Button className={style.submit_button} type="submit">
                      Save Task
                    </Button>
                    <Button
                      onClick={handleClose}
                      className={style.cancel_button}
                    >
                      Cancel
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </DialogContent>
        </div>
      </BootstrapDialog>
    </div>
  );
}

export default connect(mapStateProps, mapDispatchToProps)(CustomizedDialogs);
