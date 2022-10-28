import React from "react";
import { connect } from "react-redux";
import { Task } from "../../redux/Dtos/Task";
import * as taskActions from "../../redux/actions/taskActions";
import PropTypes from "prop-types"
import { AnyAction, bindActionCreators, Dispatch } from "redux";

class TaskForm extends React.Component{
    state = {
        task: {
            id: NaN,
            title: "",
            due_date: "",
            create_date: "",
            complete: false
        }
    }
    static propTypes: { tasks: PropTypes.Validator<any[]>; actions: PropTypes.Validator<object>; };


    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const task = { ...this.state.task, [event.target.name]: event.target.value};
        this.setState({task});
    }
    handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        TaskForm.propTypes.actions.createTask(this.state.task);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form__item"></div>
                <label>Task Title:</label>
                <input type="text" name="title" onChange={this.handleChange} value={this.state.task.title} />
                <label>Due Date:</label>
                <input type="date" name="due_date" onChange={this.handleChange} value={this.state.task.due_date} />
                <input type="submit" value="Save" />
            </form>
        );
    }
}

TaskForm.propTypes = {
  tasks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state: { tasks: any; }) {
  return {
    tasks: state.tasks
  };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    actions: bindActionCreators(taskActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);