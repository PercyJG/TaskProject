import { Task } from "../Dtos/Task";
import * as types from "../actions/actionTypes"

export default function taskReducer(state = [], action:{type:string; task:Task}){
    switch(action.type){
        case types.CREATE_TASK:
            return [...state, {...action.task}];
        default:
            return state;
    }
}