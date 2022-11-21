import React from "react";
import TaskForm from "./components/Tasks/TaskForm";
import TaskList from "./components/Tasks/TaskList";
import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";

const App: React.FC = () => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <div className="page_container">
          <div className="component_container">
            <h2 className="app_title">TASK LIST APLICATION</h2>
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </StyledEngineProvider>
    </>
  );
};

export default App;
