import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  filter: "all",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
      localStorage.setItem(
        `tasks_${localStorage.getItem("loggedInUser")}`,
        JSON.stringify(state.tasks)
      );
    },
    updateTask(state, action) {
      const { id, title } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.title = title;
      }
      localStorage.setItem(
        `tasks_${localStorage.getItem("loggedInUser")}`,
        JSON.stringify(state.tasks)
      );
    },
    removeTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem(
        `tasks_${localStorage.getItem("loggedInUser")}`,
        JSON.stringify(state.tasks)
      );
    },
    markTaskComplete(state, action) {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
      localStorage.setItem(
        `tasks_${localStorage.getItem("loggedInUser")}`,
        JSON.stringify(state.tasks)
      );
    },
    setTaskFilter(state, action) {
      state.filter = action.payload; // Update the filter value
    },
    setTasksForUser(state, action) {
      const tasks = JSON.parse(
        localStorage.getItem(`tasks_${action.payload}`)
      ) || [];
      state.tasks = tasks; // Set tasks specific to the logged-in user
    },
    resetTasks(state) {
      state.tasks = []; // Clear tasks on logout
    },
  },
});

export const { 
  addTask, 
  updateTask, 
  removeTask, 
  markTaskComplete, 
  setTaskFilter, 
  setTasksForUser, 
  resetTasks 
} = taskSlice.actions;

export default taskSlice.reducer;
