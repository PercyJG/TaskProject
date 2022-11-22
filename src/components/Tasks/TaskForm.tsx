import { Button, StylesProvider, TextField } from "@material-ui/core";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../store/models/actions";
import { AppState } from "../../store/rootStore";
import { Task } from "../../store/task/models/Task";
import { PostAddStatus } from "../../store/task/TaskAction";
import { DatedElement } from "../FormElements/DateElement";
import * as Yup from "yup";
import style from "./TaskForm.module.css";

interface props {}

interface LinkStateProps {
  tasks: Task[];
}

interface LinkDispatchProps {
  PostAddStatus: (task: Task) => void;
}

type LinkProps = props & LinkStateProps & LinkDispatchProps;

const mapStateProps = (state: AppState): LinkStateProps => ({
  tasks: state.TaskReducer.tasks,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, {}, AppActions>
) => ({
  PostAddStatus: bindActionCreators(PostAddStatus, dispatch),
});

class TaskForm extends Component<LinkProps, { task: Task; error: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      task: {
        id: "",
        title: "",
        due_date: "",
        create_date: "",
        checked: false,
      },
      error: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((prevState) => ({
      task: {
        ...prevState.task,
        [event.target.name]: event.target.value,
      },
    }));
  };

  render() {
    return (
      <>
        <StylesProvider injectFirst>
          <Formik
            initialValues={this.state.task}
            validationSchema={Yup.object().shape({
              id: Yup.string(),
              title: Yup.string()
                .max(25, "Must be 25 characters or less")
                .required("Title required"),
              due_date: Yup.string().required("Due date required"),
              create_date: Yup.string(),
              checked: Yup.boolean().required("required"),
            })}
            onSubmit={(values, { resetForm }) => {
              values.create_date = new Date().toLocaleDateString("fr-CA");
              this.props.PostAddStatus(values);
              resetForm();
            }}
          >
            {({ values }) => (
              <Form className={style.form}>
                <p className={style.form_title}>Add new task</p>
                <div className={style.form_item}>
                  <label>Task title:</label>
                  <Field
                    className={style.form_input_textfield}
                    InputProps={{ disableUnderline: true }}
                    as={TextField}
                    name="title"
                    placeholder="Title of the task"
                  />
                  <ErrorMessage className={style.form_error} name="title" />
                </div>
                <div className={style.form_item}>
                  <label>Due Date</label>
                  <Field
                    name="due_date"
                    InputProps={{ disableUnderline: true }}
                    component={DatedElement}
                  />
                </div>
                <Button type="submit" className={style.form_button}>
                  Add new task
                </Button>
              </Form>
            )}
          </Formik>
        </StylesProvider>
      </>
    );
  }
}

export default connect(mapStateProps, mapDispatchToProps)(TaskForm);
