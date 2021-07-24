import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    text: "Doctor Appointment",
    date: "2021-02-05",
    time: "10:30",
    reminder: false
  },
  {
    id: 2,
    text: "Lab Appointment",
    date: "2021-03-15",
    time: "07:30",
    reminder: true
  },
  {
    id: 3,
    text: "Final Check-up Appointment",
    date: "2021-03-25",
    time: "14:00",
    reminder: true
  }
];

export const tasksReducer = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const id = Date.now();
      const task = action.payload;
      const newTask = { id, ...task };
      return [...state, newTask];
    },
    removeTask: (state, action) => {
      const taskId = action.payload;
      return state.filter((todo) => todo.id !== taskId);
    },
    reminderToggle: (state, action) => {
      const taskId = action.payload;
      return state.map((task) =>
        task.id === taskId ? { ...task, reminder: !task.reminder } : task
      );
    },
    editTask: (state, action) => {
      const editedTask = action.payload;
      return state.map((task) =>
        task.id !== editedTask.id ? task : editedTask
      );
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  addTask,
  removeTask,
  reminderToggle,
  editTask
} = tasksReducer.actions;

export default tasksReducer.reducer;
