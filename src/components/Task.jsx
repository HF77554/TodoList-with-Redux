import { AiFillCloseCircle } from "react-icons/ai";
import ElementEditor from "./ElementEditor";
import { useDispatch } from "react-redux";
import { removeTask, reminderToggle } from "../redux/tasksReducer";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={taskClassName(task.reminder)}
      onDoubleClick={() => dispatch(reminderToggle(task.id))}
    >
      <div>
        <div className="task-header-display">
          <ElementEditor task={task} taskProp={task.text} type="text" />
          <div>
            <AiFillCloseCircle onClick={() => dispatch(removeTask(task.id))} />
          </div>
        </div>
        <ElementEditor task={task} taskProp={task.date} type="date" />
        <ElementEditor task={task} taskProp={task.time} type="time" />
      </div>
    </div>
  );
};

const taskClassName = (reminder) => {
  return reminder ? "task reminder" : "task";
};

export default Task;
