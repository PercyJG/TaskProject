import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Task } from "../../interface/ITask";
import { postTask } from "../../service/taskService";

const TaskForm: React.FC = ({ postTask }: any) => {
  const params = useParams();
  const [error, setError] = useState(false);
  const [task, setTask] = useState<Task>({
    id: "",
    title: "",
    due_date: "",
    create_date: "",
    complete: false,
  });

  useEffect(() => {
    if (params.id !== null) {
    }
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTask = { ...task, [event.target.name]: event.target.value };
    setTask({ ...newTask });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (params.id !== "") {
      console.log(params.id);
      debugger;
    } else {
      console.log("vacio");
    }
    if (task.title && task.due_date) {
      postTask(task);
      clearInputs();
    } else {
      setError(true);
    }
  };

  function clearInputs() {
    setTask({
      id: "",
      title: "",
      due_date: "",
      create_date: "",
      complete: false,
    });
  }

  return (
    <div>
      <h2>{params.id === undefined ? "Add new task" : "Edit task"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form__item"></div>
        <label>Task Title:</label>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={task.title}
          placeholder="Title of the task"
        />
        <span
          data-testid="error"
          style={{ visibility: error ? "visible" : "hidden" }}
        >
          Please complete this field
        </span>
        <label>Due Date:</label>
        <input
          type="date"
          name="due_date"
          onChange={handleChange}
          value={task.due_date}
          placeholder="Due date for the task"
        />
        <span
          data-testid="error"
          style={{ visibility: error ? "visible" : "hidden" }}
        >
          Please complete this field
        </span>
        <button disabled={!task.title || !task.due_date} type="submit">
          Save Task
        </button>
      </form>
    </div>
  );
};

const mapStateProps = (state: any) => {
  return {
    stateTask: state.taskReducer,
  };
};

const mapDispatchToProps = {
  postTask,
};

export default connect(mapStateProps, mapDispatchToProps)(TaskForm);
