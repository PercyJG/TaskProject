import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import "./App.css";
import HomePage from "./components/home/HomePage";
import { Provider as ReduxProvider } from "react-redux";
import { taskReducer } from "./redux/reducers/taskReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

let reducers = combineReducers({ taskReducer });

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

function App() {
  return (
    <ReduxProvider store={store}>
      <h1>task list application</h1>
      <HomePage />
    </ReduxProvider>
  );
}

export default App;
