import { Action } from "../../interface/IAction";
import { Task } from "../../interface/ITask";
import { ADD_TASK, CHANGE_STATE_TASK, DELETE_TASK, GET_TASKS, UPDATE_TASK } from "../actions/taskActions";

const initialStatusTask = {
    taskList:[] as Task[]
}


export function taskReducer(state = initialStatusTask, action:Action){
    switch(action.type){
        case GET_TASKS:
            return {
                taskList: action.payload
            }
        case ADD_TASK:
            return {
                taskList:[...state.taskList, action.payload]
            }
        case DELETE_TASK:
            return {
                taskList: state.taskList.filter((item:Task) => item.id !== action.payload?.id)
            }
        case UPDATE_TASK:
            const newTask = state.taskList.filter((item:Task) => item.id !== action.payload?.id);
            return {
                taskList: [...newTask, action.payload]
            }
        case CHANGE_STATE_TASK:
            state.taskList.map((task) => {
                if(task.id === action.payload?.id){
                    task.complete = !task.complete;
                }
            });
            return {
                taskList: state.taskList
            }
        default:
            return state
    }
}