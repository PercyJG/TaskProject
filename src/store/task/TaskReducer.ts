import {
  ADD_TASK_FAILURE,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  CHANGE_TASK_STATUS_FAILURE,
  CHANGE_TASK_STATUS_REQUEST,
  CHANGE_TASK_STATUS_SUCCESS,
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  DELETE_TASK_FAILURE,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  TaskActionTypes,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
} from "./models/actions";
import { Task } from "./models/Task";

export interface TaskState {
  loading: boolean;
  tasks: Task[];
  error: string;
}

export const defaultState: TaskState = {
  loading: false,
  tasks: [],
  error: "",
};

export const TaskReducer = (
  state = defaultState,
  action: TaskActionTypes
): TaskState => {
  switch (action.type) {
    case FETCH_TASKS_REQUEST:
      return { loading: true, tasks: [], error: "" };
    case FETCH_TASKS_SUCCESS:
      return { loading: false, tasks: action.tasks, error: "" };
    case FETCH_TASKS_FAILURE:
      return { loading: false, tasks: [], error: action.error };

    case CHANGE_TASK_STATUS_REQUEST:
      return { loading: true, tasks: state.tasks, error: "" };
    case CHANGE_TASK_STATUS_SUCCESS:
      state.tasks.map((task) => {
        if (task.id === action.taskId) {
          task.checked = !task.checked;
        }
      });
      return { loading: false, tasks: [...state.tasks], error: "" };
    case CHANGE_TASK_STATUS_FAILURE:
      return { loading: false, tasks: state.tasks, error: action.error };

    case ADD_TASK_REQUEST:
      return { loading: true, tasks: state.tasks, error: "" };
    case ADD_TASK_SUCCESS:
      return {
        loading: false,
        tasks: [...state.tasks, action.tasks[0]],
        error: "",
      };
    case ADD_TASK_FAILURE:
      return { loading: false, tasks: state.tasks, error: action.error };

    case UPDATE_TASK_REQUEST:
      return { loading: true, tasks: state.tasks, error: "" };
    case UPDATE_TASK_SUCCESS:
      /*let newTasks = state.tasks.filter(
        (task) => task.id !== action.tasks[0].id
      );
      return {
        loading: false,
        tasks: [...newTasks, action.tasks[0]],
        error: "",
      };*/
      state.tasks.map((task) => {
        if (task.id === action.tasks[0].id) {
          task.title = action.tasks[0].title;
          task.due_date = action.tasks[0].due_date;
          task.checked = action.tasks[0].checked;
          return 0;
        }
      });
      return { loading: false, tasks: [...state.tasks], error: "" };
    case UPDATE_TASK_FAILURE:
      return { loading: false, tasks: state.tasks, error: action.error };

    case DELETE_TASK_REQUEST:
      return { loading: true, tasks: state.tasks, error: "" };
    case DELETE_TASK_SUCCESS:
      let newDeletedTasks = state.tasks.filter(
        (task) => task.id !== action.taskId
      );
      return {
        loading: false,
        tasks: newDeletedTasks,
        error: "",
      };
    case DELETE_TASK_FAILURE:
      return { loading: false, tasks: state.tasks, error: action.error };

    default:
      return state;
  }
};
