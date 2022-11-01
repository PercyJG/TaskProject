import React from "react";
import TaskForm from "../task/TaskForm";
import TaskList from "../task/TaskList";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>task list application</h1>
        <TaskForm />
        <TaskList />
      </div>
    );
  }
}

export default HomePage;
