import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Task } from "../../interface/ITask";
import {
  changeStateTask,
  deleteTask,
  getTasks,
} from "../../service/taskService";

const TaskList: React.FC = ({
  getTasks,
  changeStateTask,
  deleteTask,
  stateTask,
}: any) => {
  useEffect(() => {
    getTasks();
  }, [getTasks]);

  function RemoveTask(id: string) {
    if (window.confirm("Delete Task?")) {
      deleteTask(id);
    }
  }

  function changeTaskStatus(id: string) {
    changeStateTask(id);
  }

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
          {stateTask.taskList.map((task: Task) => (
            <tr key={`${task.id}`}>
              <td>
                <input
                  type="checkbox"
                  checked={task.complete}
                  onChange={() => changeTaskStatus(task.id)}
                />
              </td>
              <td>{`${task.title}`}</td>
              <td>{`${task.due_date}`}</td>
              <td>{`${task.create_date}`}</td>
              <td>
                <a href={`/${task.id}`}>edit</a>
              </td>
              <td onClick={() => RemoveTask(task.id)}>del</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateProps = (state: any) => {
  return {
    stateTask: state.taskReducer,
  };
};

const mapDispatchToProps = {
  getTasks,
  deleteTask,
  changeStateTask,
};

export default connect(mapStateProps, mapDispatchToProps)(TaskList);
