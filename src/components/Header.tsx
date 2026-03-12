import { Link } from "react-router";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";

type DarkMode = {
   darkMode: string | boolean,
}

function Header({darkMode} : DarkMode) {

  return (
    <div className="p-5 flex justify-between bg-slate-900 text-white sm:hidden">
      <div className="logo">
        <Link to="/">Tasker</Link>
      </div>
      <div>
        <Bars3BottomRightIcon className="w-8 h-8" />
      </div>
    </div>
  );
}

export default Header;
