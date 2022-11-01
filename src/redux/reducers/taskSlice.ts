import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../Dtos/Task";
import { RootState } from "../configureStore";


const initialState: Task[] = [];

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{
        addTask: (state, action: PayloadAction<Task>) => {
            return[action.payload, ...state]
        },
        getTask:(state, action: PayloadAction<Task[]>) =>{
            return action.payload;
        },
        changeTaskStatus:(state, action: PayloadAction<string>) =>{
            state.map((task) => {
                if(task.id === action.payload){
                    task.complete= !task.complete;
                }
            });
            return state;
        },
        deteleTask:(state, action: PayloadAction<string>) =>{
            return state.filter(task => task.id !== action.payload);
        }
    }
});

export const { addTask } = tasksSlice.actions;
export const { changeTaskStatus } = tasksSlice.actions;
export const { deteleTask } = tasksSlice.actions;
export const { getTask } = tasksSlice.actions;

export const getTaskSelector = (state: RootState) => state.taskSlice;

export default tasksSlice.reducer;