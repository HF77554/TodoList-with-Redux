import { useState } from "react";
import { addTask } from "../redux/tasksReducer";
import { useDispatch } from "react-redux";

const AddTasks = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text || !date || !time) {
      alert("Missing a value, please add all elements in form");
      return;
    }
    dispatch(addTask({ text, date, time, reminder }));
    onAdd();
    setText("");
    setDate("");
    setTime("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day</label>
        <input
          type="date"
          placeholder="Add Day and Time"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label>Time</label>
        <input
          type="time"
          placeholder="Add Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  );
};
export default AddTasks;
