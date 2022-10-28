import { Task } from "../Dtos/Task";

export default function taskReducer(state = [], action:{type:string; task:Task}){
    switch(action.type){
        case "CREATE_COURSE":
            return [...state, {...action.task}];
        default:
            return state;
    }
}