import { Link } from "react-router";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

type DashBoardHeaderProp = {
  darkMode: string | boolean;
};

function DashboardHeader({darkMode}: DashBoardHeaderProp){

  return(
    <div className="flex mr-6 mb-8">
      <div className={`grow font-bold text-2xl ${darkMode === 'true' ? 'text-white' : 'text-slate-900'}`}>My Tasks</div>
      <Link to={'/add-task'}>
      <button className="py-2 px-4 text-white bg-blue-500 rounded text-sm flex gap-1 items-center cursor-pointer">
        <PlusCircleIcon className="h-6 w-6"/>
        <div>New Task</div>
        </button>
      </Link>
    </div>
  )
}

export default DashboardHeader;