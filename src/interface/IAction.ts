import { Task } from "./ITask";

export interface Action {
    type: string,
    payload: Task | null
}