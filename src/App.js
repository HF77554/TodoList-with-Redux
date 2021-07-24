import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useSelector } from "react-redux";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="main-app-background">
      <div className="main-app-body">
        <Header
          title="Task Tracker"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={() => setShowAddTask(false)} />}
        {tasks.length > 0 ? <Tasks tasks={tasks} /> : <h3>No Tasks to Show</h3>}
      </div>
    </div>
  );
};

export default App;

/*
{tasks.length > 0 ? (
  <Tasks
    tasks={tasks}
    onDelete={deleteTask}
    onToggle={toggleReminder}
    onEdit={editTask}
  />
) : (
  <h3>No Tasks to Show</h3>
)}
*/
