import React, { useState } from "react";
import { Task } from "../../redux/Dtos/Task";
import { addTask } from "../../redux/reducers/taskSlice";
import { useAppDispatch } from "../../redux/storeHooks";
import { v4 as uuidv4 } from "uuid";

const TaskForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const [task, setTask] = useState<Task>({
    id: "",
    title: "",
    due_date: "",
    create_date: "",
    complete: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newtask = { ...task, [event.target.name]: event.target.value };
    setTask({ ...newtask });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    task.id = uuidv4();
    dispatch(addTask(task));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form__item"></div>
      <label>Task Title:</label>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        value={task.title}
      />
      <label>Due Date:</label>
      <input
        type="date"
        name="due_date"
        onChange={handleChange}
        value={task.due_date}
      />
      <input type="submit" value="Save Task" />
    </form>
  );
};

export default TaskForm;
