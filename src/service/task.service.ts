import axios from "axios";
import { getTask } from "../redux/reducers/taskSlice";
import { useAppDispatch } from "../redux/storeHooks";

export const getTasks = () => async (dispatch:any) => {
    debugger;
    dispatch = useAppDispatch();
    axios.get(`https://mocki.io/v1/3c7a6eb1-ab44-487f-a445-6766ae5b7845`)
    .then((response) => {
        console.log(response);
        debugger;
        const data = response.data;
        dispatch(getTask(data));
    })
    .catch((error) => {
        debugger;
        console.log(error);
    });
}