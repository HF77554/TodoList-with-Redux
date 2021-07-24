import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <Task key={task.id} task={task} />
        </div>
      ))}
    </div>
  );
};

export default Tasks;
