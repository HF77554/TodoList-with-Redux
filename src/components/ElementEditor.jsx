import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/tasksReducer";

const ElementEditor = ({ task, taskProp, type }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [notEditTime, editChange] = useState(true);

  const handleMouseLeave = () => {
    editChange(true);
    if (value) {
      let updatedTask;
      switch (type) {
        case "text":
          updatedTask = { ...task, text: value };
          break;
        case "date":
          updatedTask = { ...task, date: value };
          break;
        case "time":
          updatedTask = { ...task, time: value };
          break;
        default:
          break;
      }
      dispatch(editTask(updatedTask));
    }
    setValue("");
  };

  return (
    <div
      className="container-element-editor"
      onMouseEnter={() => editChange(false)}
      onMouseLeave={() => handleMouseLeave()}
    >
      {notEditTime ? (
        taskProp
      ) : (
        <form className="task-edit-form">
          <input
            className="task-edit-value"
            type={type}
            placeholder={taskProp}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
      )}
    </div>
  );
};
export default ElementEditor;
