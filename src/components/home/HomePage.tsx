import React from "react";
import TaskForm from "../task/TaskForm";
import TaskList from "../task/TaskList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path=":id" element={<TaskForm />} />
            <Route path="/" element={<TaskForm />} />
          </Routes>
          <TaskList />
        </div>
      </Router>
    );
  }
}

export default HomePage;
