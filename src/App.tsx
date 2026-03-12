import { Routes } from "react-router";
import { Route } from "react-router";
import { useEffect, useState } from "react";
import Dashboard from "./pages/DashboardPage/Dashboard";
import AddTaskPage from "./pages/AddTaskPage/AddTaskPage";
import SettingsPage from "./pages/SettingPage/SettingsPage";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") ?? "[]"),
  );

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("appMode") ?? "false",
  );

  // add effect to set localstorage if tasks and darkMode change
  /* replace local storage.set with setTasks where neccesary in the project */

  useEffect(() => {
     document.documentElement.classList.toggle("dark");
  } , [darkMode]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Dashboard tasks={tasks} setTasks={setTasks} darkMode={darkMode} />
        }
      />
      <Route
        path="/add-task"
        element={<AddTaskPage tasks={tasks} setTasks={setTasks} />}
      />
      <Route
        path="/settings"
        element={<SettingsPage darkMode={darkMode} setDarkMode={setDarkMode} />}
      />
    </Routes>
  );
}

export default App;
