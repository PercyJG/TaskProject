import { Button } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../store/models/actions";
import { AppState } from "../../store/rootStore";
import { Task } from "../../store/task/models/Task";
import { PostAddStatus } from "../../store/task/TaskAction";
import { DatedElement } from "../FormElements/DateElement";
import { TextFieldElement } from "../FormElements/TextFieldElement";
import * as Yup from "yup";
import { validate } from "uuid";

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
        complete: false,
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

  handleSubmit = (task: Task) => {
    this.props.PostAddStatus(task);
  };

  render() {
    return (
      <>
        <h2>Add new task</h2>
        <Formik
          initialValues={{
            id: "",
            title: "",
            due_date: "",
            create_date: new Date().toLocaleDateString(),
            complete: false,
          }}
          validationSchema={Yup.object().shape({
            id: Yup.string(),
            title: Yup.string()
              .max(25, "Must be 25 characters or less")
              .required("Title required"),
            due_date: Yup.string().required("Due daterequired"),
            create_date: Yup.string(),
            complete: Yup.boolean().required("required"),
          })}
          onSubmit={(values, { resetForm }) => {
            this.handleSubmit(values);
            resetForm();
          }}
        >
          {({ values }) => (
            <Form>
              <div>
                <Field
                  name="title"
                  label="Task title"
                  placeholder="Title of the task"
                  component={TextFieldElement}
                />
              </div>
              <div>
                <Field
                  name="due_date"
                  label="Task due date"
                  component={DatedElement}
                />
              </div>
              <Button type="submit">Save Task</Button>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}

export default connect(mapStateProps, mapDispatchToProps)(TaskForm);
