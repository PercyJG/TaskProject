import { Task } from "../Dtos/Task";

export function createTask(task: Task){
    return{ type: "CREATE_COURSE", task};
} 