import axios from "axios";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../models/actions";
import {
  ADD_TASK_FAILURE,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  CHANGE_TASK_STATUS_FAILURE,
  CHANGE_TASK_STATUS_REQUEST,
  CHANGE_TASK_STATUS_SUCCESS,
  DELETE_TASK_FAILURE,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  UPDATE_TASK_FAILURE,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
} from "./models/actions";
import { Task } from "./models/Task";
import { TaskState } from "./TaskReducer";

const requestTasks = (): AppActions => ({
  type: FETCH_TASKS_REQUEST,
  loadingRequestTasks: true,
  loadingEditStatusTask: false,
  loadingAddTask: false,
  taskId: "",
  tasks: [],
  error: "",
});

const recieveTasks = (tasks: Task[]): AppActions => ({
  type: FETCH_TASKS_SUCCESS,
  loadingRequestTasks: false,
  loadingEditStatusTask: false,
  loadingAddTask: false,
  taskId: "",
  tasks,
  //task: {},
  error: "",
});

const invalidateTasks = (error: string): AppActions => ({
  type: FETCH_TASKS_FAILURE,
  loadingRequestTasks: false,
  loadingEditStatusTask: false,
  loadingAddTask: false,
  taskId: "",
  tasks: [],
  //task: null,
  error,
});

export const GetRequestTasks = () => {
  return async (dispatch: ThunkDispatch<TaskState, {}, AnyAction>) => {
    dispatch(requestTasks());
    try {
      const response = await axios.get(
        `https://mocki.io/v1/e20e036a-e7af-46a9-a716-162f9bb14cfc`
      );
      const data = response.data;
      const responseStatus = response.status;
      if (responseStatus === 200) {
        return dispatch(recieveTasks(data));
      }
    } catch (error: any) {
      return dispatch(invalidateTasks(error));
    }
  };
};

const requestChangeTasksStatus = (): AppActions => ({
  type: CHANGE_TASK_STATUS_REQUEST,
  loadingRequestTasks: false,
  loadingEditStatusTask: true,
  loadingAddTask: false,
  taskId: "",
  tasks: [],
  //task: null,
  error: "",
});

const recieveChangeTasksStatus = (taskId: string): AppActions => ({
  type: CHANGE_TASK_STATUS_SUCCESS,
  loadingRequestTasks: false,
  loadingEditStatusTask: false,
  loadingAddTask: false,
  taskId,
  tasks: [],
  //task: null,
  error: "",
});

const invalidateChangeTasksStatus = (error: string): AppActions => ({
  type: CHANGE_TASK_STATUS_FAILURE,
  loadingRequestTasks: false,
  loadingEditStatusTask: false,
  loadingAddTask: false,
  taskId: "",
  tasks: [],
  //task: null,
  error,
});

export const PutChangeTastStatus = (taskId: string) => {
  return async (dispatch: ThunkDispatch<TaskState, {}, AnyAction>) => {
    dispatch(requestChangeTasksStatus());
    try {
      const response = await axios.get(
        `https://mocki.io/v1/e20e036a-e7af-46a9-a716-162f9bb14cfc`
      );
      const responseStatus = response.status;
      if (responseStatus === 200) {
        return dispatch(recieveChangeTasksStatus(taskId));
      }
    } catch (error: any) {
      return dispatch(invalidateChangeTasksStatus(error));
    }
  };
};

const requestAddTasks = (): AppActions => ({
  type: ADD_TASK_REQUEST,
  loadingRequestTasks: false,
  loadingEditStatusTask: false,
  loadingAddTask: true,
  taskId: "",
  tasks: [],
  error: "",
});

const recieveAddTasks = (task: Task): AppActions => ({
  type: ADD_TASK_SUCCESS,
  loadingRequestTasks: false,
  loadingEditStatusTask: false,
  loadingAddTask: false,
  taskId: "",
  tasks: [task],
  error: "",
});

const invalidateAddTasks = (error: string): AppActions => ({
  type: ADD_TASK_FAILURE,
  loadingRequestTasks: false,
  loadingEditStatusTask: false,
  loadingAddTask: false,
  taskId: "",
  tasks: [],
  error,
});

export const PostAddStatus = (task: Task) => {
  return async (dispatch: ThunkDispatch<TaskState, {}, AnyAction>) => {
    dispatch(requestAddTasks());
    try {
      const response = await axios.get(
        `https://mocki.io/v1/e20e036a-e7af-46a9-a716-162f9bb14cfc`
      );
      const responseStatus = response.status;
      if (responseStatus === 200) {
        return dispatch(recieveAddTasks(task));
      }
    } catch (error: any) {
      return dispatch(invalidateAddTasks(error));
    }
  };
};

const requestUpdateTasks = (): AppActions => ({
  type: UPDATE_TASK_REQUEST,
  loadingRequestTasks: false,
  loadingEditStatusTask: false,
  loadingAddTask: true,
  taskId: "",
  tasks: [],
  error: "",
});

const recieveUpdateTasks = (task: Task): AppActions => ({
  type: UPDATE_TASK_SUCCESS,
  loadingRequestTasks: false,
  loadingEditStatusTask: false,
  loadingAddTask: false,
  taskId: "",
  tasks: [task],
  error: "",
});

const invalidateUpdateTasks = (error: string): AppActions => ({
  type: UPDATE_TASK_FAILURE,
  loadingRequestTasks: false,
  loadingEditStatusTask: false,
  loadingAddTask: false,
  taskId: "",
  tasks: [],
  error,
});

export const PutEditTaskStatus = (task: Task) => {
  return async (dispatch: ThunkDispatch<TaskState, {}, AnyAction>) => {
    dispatch(requestUpdateTasks());
    try {
      const response = await axios.get(
        `https://mocki.io/v1/e20e036a-e7af-46a9-a716-162f9bb14cfc`
      );
      const responseStatus = response.status;
      if (responseStatus === 200) {
        return dispatch(recieveUpdateTasks(task));
      }
    } catch (error: any) {
      return dispatch(invalidateUpdateTasks(error));
    }
  };
};

const requestDeleteTasks = (): AppActions => ({
  type: DELETE_TASK_REQUEST,
  loadingRequestTasks: false,
  loadingEditStatusTask: false,
  loadingAddTask: true,
  taskId: "",
  tasks: [],
  error: "",
});

const recieveDeleteTasks = (taskId: string): AppActions => ({
  type: DELETE_TASK_SUCCESS,
  loadingRequestTasks: false,
  loadingEditStatusTask: false,
  loadingAddTask: false,
  taskId: taskId,
  tasks: [],
  error: "",
});

const invalidateDeleteTasks = (error: string): AppActions => ({
  type: DELETE_TASK_FAILURE,
  loadingRequestTasks: false,
  loadingEditStatusTask: false,
  loadingAddTask: false,
  taskId: "",
  tasks: [],
  error,
});

export const DeleteTaskStatus = (taskId: string) => {
  return async (dispatch: ThunkDispatch<TaskState, {}, AnyAction>) => {
    dispatch(requestDeleteTasks());
    try {
      const response = await axios.get(
        `https://mocki.io/v1/e20e036a-e7af-46a9-a716-162f9bb14cfc`
      );
      const responseStatus = response.status;
      if (responseStatus === 200) {
        return dispatch(recieveDeleteTasks(taskId));
      }
    } catch (error: any) {
      return dispatch(invalidateDeleteTasks(error));
    }
  };
};
