import { Link } from "react-router";
import { HomeIcon } from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

type DarkMode = {
   darkMode: string | boolean,
}

function SideBar({darkMode} : DarkMode) {

  return (
    <nav className={`fixed left-0 h-screen w-55 bg-slate-900 ${darkMode === 'true' && 'bg-white'} pl-5 pt-8 hidden sm:block top-0`}>
      <div className={`logo ${darkMode === 'true' ? 'text-slate-800' : 'text-white'}`}>
        <Link to="/Dashboard">Tasker</Link>
      </div>
      <div className={`mt-10 pr-8 text-base flex flex-col gap-2  ${darkMode === 'true' ? 'text-gray-500' : 'text-gray-300'}`}>
        <div>
          <Link
            to="/"
            className="
          flex gap-2 items-center side-nav-links"
          >
            <HomeIcon className={`h-5 w-5 ${darkMode === 'true' ? 'text-slate-800' : 'text-white'} stroke-2`}/>
            <div>Dashboard</div>
          </Link>
        </div>
        <div>
          <Link to="/Settings" className={`flex gap-2 items-center side-nav-links`}>
            <Cog6ToothIcon  className={`h-5 w-5 stroke-2 ${darkMode === 'true' ? 'text-slate-600' : 'text-white'}`}/>
            <div>Settings</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
