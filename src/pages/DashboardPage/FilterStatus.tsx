import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";

type FilterStatusProp = {
  filterValue: string;
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
  darkMode: string | boolean;
};

function Filterstatus({
  filterValue,
  setFilterValue,
  darkMode,
}: FilterStatusProp) {
  const navigate = useNavigate();

  const handleFilterChange = (e: any) => {
    setFilterValue(e.target.value);
    navigate(`/?filterValue=${e.target.value}`);
  };

  return (
    <div className="flex items-center my-10 cursor-pointer">
      <div
        className={`text-lg grow ${darkMode === "true" ? "text-white" : "text-slate-900"}`}
      >
        Filter
      </div>
      <div className="flex items-center gap-2">
        <select
          className={`border focus:outline-0 focus:border rounded border-gray-500/50 px-2 py-1 ${darkMode === "true" ? "text-white" : "text-slate-900"}`}
          value={filterValue}
          onChange={handleFilterChange}
        >
          <option
            className={`${darkMode === "true" && 'text-black'}`}
            value="All"
          >
            All
          </option>
          <option
            className={`${darkMode === "true" && 'text-black'}`}
            value="To-do"
          >
            To-do
          </option>
          <option
            className={`${darkMode === "true" && 'text-black'}`}
            value="In-progress"
          >
            In-progress
          </option>
          <option
            className={`${darkMode === "true" && 'text-black'}`}
            value="Completed"
          >
            Completed
          </option>
        </select>
        <AdjustmentsVerticalIcon
          className={`h-5 w-5 stroke-2 ${darkMode === "true" ? "text-white" : "text-slate-900"}`}
        />
      </div>
    </div>
  );
}

export default Filterstatus;
