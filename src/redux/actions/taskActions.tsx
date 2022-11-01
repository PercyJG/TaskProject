import { Task } from "../Dtos/Task";
import * as types from './actionTypes';

export function createTask(task: Task){
    return{ type: types.CREATE_TASK, task};
} 