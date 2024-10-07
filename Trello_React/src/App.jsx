import React, { useState } from "react";
import { TaskList } from "./Components/TaskList";
import { TaskForm } from "./Components/TAskForm";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, description) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      state: "To Do",
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="columns">
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks.filter((task) => task.state === "To Do")} title="To Do" />
      <TaskList tasks={tasks.filter((task) => task.state === "In Progress")} title="In Progress" />
      <TaskList tasks={tasks.filter((task) => task.state === "Done")} title="Done" />
    </div>
  );
};

export default App;