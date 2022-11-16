import { Task } from "./Task";

export const FETCH_TASKS_REQUEST = "FETCH_TASKS_REQUEST";
export const FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS";
export const FETCH_TASKS_FAILURE = "FETCH_TASKS_FAILURE";
export const CHANGE_TASK_STATUS_REQUEST = "CHANGE_TASK_STATUS_REQUEST";
export const CHANGE_TASK_STATUS_SUCCESS = "CHANGE_TASK_STATUS_SUCCESS";
export const CHANGE_TASK_STATUS_FAILURE = "CHANGE_TASK_STATUS_FAILURE";
export const ADD_TASK_REQUEST = "ADD_TASK_REQUEST";
export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS";
export const ADD_TASK_FAILURE = "ADD_TASK_FAILURE";
export const DELETE_TASK_REQUEST = "DELETE_TASK_REQUEST";
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS";
export const DELETE_TASK_FAILURE = "DELETE_TASK_FAILURE";
export const UPDATE_TASK_REQUEST = "DELETE_TASK_REQUEST";
export const UPDATE_TASK_SUCCESS = "DELETE_TASK_SUCCESS";
export const UPDATE_TASK_FAILURE = "DELETE_TASK_FAILURE";

interface TaskAsync {
  loadingRequestTasks: boolean;
  loadingEditStatusTask: boolean;
  loadingAddTask: boolean;
  taskId: string;
  tasks: Task[];
  error: string;
}

interface FetchTasksRequest extends TaskAsync {
  type: typeof FETCH_TASKS_REQUEST;
}

interface FetchTasksSuccess extends TaskAsync {
  type: typeof FETCH_TASKS_SUCCESS;
}

interface FetchTasksFailure extends TaskAsync {
  type: typeof FETCH_TASKS_FAILURE;
}

interface ChangeTaskStatusRequest extends TaskAsync {
  type: typeof CHANGE_TASK_STATUS_REQUEST;
}

interface ChangeTaskStatusSuccess extends TaskAsync {
  type: typeof CHANGE_TASK_STATUS_SUCCESS;
}

interface ChangeStatusFailure extends TaskAsync {
  type: typeof CHANGE_TASK_STATUS_FAILURE;
}

interface AddTaskRequest extends TaskAsync {
  type: typeof ADD_TASK_REQUEST;
}

interface AddTaskSuccess extends TaskAsync {
  type: typeof ADD_TASK_SUCCESS;
}

interface AddTaskFailure extends TaskAsync {
  type: typeof ADD_TASK_FAILURE;
}
interface DeleteTaskRequest extends TaskAsync {
  type: typeof DELETE_TASK_REQUEST;
}

interface DeleteTaskSuccess extends TaskAsync {
  type: typeof DELETE_TASK_SUCCESS;
}

interface DeleteTaskFailure extends TaskAsync {
  type: typeof DELETE_TASK_FAILURE;
}

interface UpdateTaskRequest extends TaskAsync {
  type: typeof UPDATE_TASK_REQUEST;
}

interface UpdateTaskSuccess extends TaskAsync {
  type: typeof UPDATE_TASK_SUCCESS;
}

interface UpdateTaskFailure extends TaskAsync {
  type: typeof UPDATE_TASK_FAILURE;
}

export type TaskActionTypes =
  | FetchTasksRequest
  | FetchTasksSuccess
  | FetchTasksFailure
  | ChangeTaskStatusRequest
  | ChangeTaskStatusSuccess
  | ChangeStatusFailure
  | AddTaskRequest
  | AddTaskSuccess
  | AddTaskFailure
  | DeleteTaskRequest
  | DeleteTaskSuccess
  | DeleteTaskFailure
  | UpdateTaskRequest
  | UpdateTaskSuccess
  | UpdateTaskFailure;
