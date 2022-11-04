import axios from "axios";
import swal from 'sweetalert';
import { Task } from "../interface/ITask";
import { ADD_TASK, CHANGE_STATE_TASK, DELETE_TASK, GET_TASKS, UPDATE_TASK } from "../redux/actions/taskActions";


export const getTasks = () => async (dispatch:any) => {
    axios.get(`https://mocki.io/v1/3c7a6eb1-ab44-487f-a445-6766ae5b7845`)
    .then((response) => {
        const data = response.data;
        dispatch({
            type: GET_TASKS,
            payload: data
        });
    })
    .catch((error) => {
        console.log(error);
    });
}

export const getTask = () =>async (dispatch:any) => {
    
}

export const postTask = (task:Task) => async (dispatch:any) => {
    dispatch({
        type:ADD_TASK,
        payload: task
    })
}

export const updateTask = (task:Task) => async (dispatch:any) => {
    dispatch({
        type:UPDATE_TASK,
        payload: task
    });
    swal("Task Updated","",'success');
}

export const deleteTask = (id:string) => async (dispatch:any) => {
    dispatch({
        type:DELETE_TASK,
        payload: {id}
    })
}

export const changeStateTask = (id:string) => async (dispatch:any) => {
    dispatch({
        type: CHANGE_STATE_TASK,
        payload: {id}
    });
}