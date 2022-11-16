import React from "react";
import TaskForm from "./components/Tasks/TaskForm";
import TaskList from "./components/Tasks/TaskList";

const App: React.FC = () => {
  return (
    <>
      <TaskForm />
      <TaskList />
    </>
  );
};

export default App;
