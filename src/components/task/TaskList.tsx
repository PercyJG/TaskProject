import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getTaskSelector,
  changeTaskStatus,
  deteleTask,
} from "../../redux/reducers/taskSlice";
import { useAppDispatch } from "../../redux/storeHooks";
import { getTasks } from "../../service/task.service";

const TaskList: React.FC = () => {
  const tasks = useSelector(getTaskSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    debugger;
    getTasks();
  });

  const markTask = (id: string) => {
    dispatch(changeTaskStatus(id));
  };

  const RemoveTask = (id: string) => {
    dispatch(deteleTask(id));
  };

  return (
    <div>
      <h2>Task of all available tasks</h2>
      <table>
        <thead>
          <tr>
            <th>Completed</th>
            <th>Task Title</th>
            <th>Due DateTime</th>
            <th>Created Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={`${task.id}`}>
              <td>
                <input
                  type="checkbox"
                  checked={task.complete}
                  onChange={() => markTask(task.id)}
                />
              </td>
              <td>{`${task.complete}`}</td>
              <td>{`${task.title}`}</td>
              <td>{`${task.due_date}`}</td>
              <td>{`${task.create_date}`}</td>
              <td>
                <a href={`?name=${task.id}`}>edit</a>
              </td>
              <td onClick={() => RemoveTask(task.id)}>del</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
