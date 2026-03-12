import { useState } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import DashboardHeader from "./DashBoardHeader";
import TodoCards from "./TodoCards";
import Filterstatus from "./FilterStatus";

type HeaderProp = {
  tasks: {
    id: `${string}-${string}-${string}-${string}-${string}`;
    taskName: string;
    taskDescription: string;
    taskDueDate: string;
    taskProgress: string;
  }[];
  setTasks: React.Dispatch<
    React.SetStateAction<
      {
        id: `${string}-${string}-${string}-${string}-${string}`;
        taskName: string;
        taskDescription: string;
        taskDueDate: string;
        taskProgress: string;
      }[]
    >
  >;
  darkMode: string | boolean;
};

function Dashboard({ tasks, setTasks, darkMode }: HeaderProp) {

  const [filterValue , setFilterValue] = useState('All');

  return (
    <>
      <title>todo-app | Dashboard</title>

      <Header darkMode={darkMode}/>

      <SideBar darkMode={darkMode}/>

      <div className={`pl-10 pt-8 h-screen min-h-max pr-10 ${darkMode === 'true' ? 'bg-slate-900' : 'bg-white'} sm:ml-55`}>
        <DashboardHeader darkMode={darkMode}/>
        
        <Filterstatus filterValue={filterValue} setFilterValue={setFilterValue} darkMode={darkMode}/>

        <TodoCards tasks={tasks} setTasks={setTasks}/>
        
      </div>
    </>
  );
}

export default Dashboard;
