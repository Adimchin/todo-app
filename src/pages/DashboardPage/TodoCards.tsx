import { deleteTask } from "./todoCardsLogic";
import { useNavigate, useSearchParams } from "react-router";

type TodoCardsProp = {
  tasks: {
    id: `${string}-${string}-${string}-${string}-${string}`;
    taskName: string;
    taskDescription: string;
    taskDueDate: string;
    taskProgress: string;
  }[],
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
  }

  const progressStyles: Record<string, string> = {
  "To-do": "bg-rose-500/80",
  "In-progress": "bg-blue-500/80",
  "Completed": "bg-green-500/80",
};

function TodoCards({ tasks, setTasks }: TodoCardsProp) {
  const navigate = useNavigate();

  const [searchParam] = useSearchParams();

  const editFilterValue = searchParam.get('filterValue');

  const filterTasks = (editFilterValue && editFilterValue !== 'All') ? tasks.filter((task) => task.taskProgress === editFilterValue) : tasks;

  return (
    <div className="grid grid-cols-1 gap-y-6 gap-x-3 md:grid-cols-2 xl:grid-cols-3">
      {filterTasks.map((task) => {
        
        const editTask = () => {
          navigate(`/add-task?task=${task.id}`);
        }

        return (
          <div
            className="bg-white py-5 pl-5 pr-8 flex flex-col gap-3 rounded shadow"
            key={task.id}
          >
            <div className="flex align-middle">
              <div className="grow font-semibold tracking-tight ">
                {task.taskName}
              </div>
              <div className={`rounded-md py-1 px-3 tracking-tight text-sm ${progressStyles[task.taskProgress ?? 'text-rose-500']} text-white font-semibold`}>
                {task.taskProgress}
              </div>
            </div>
            <div className="text-base">{task.taskDescription}</div>
            <div className="text-sm flex ">
              <div className="grow text-gray-600">{task.taskDueDate}</div>
              <div className="flex gap-3">
                <button 
                className="text-blue-700 cursor-pointer"
                onClick={editTask}
                >Edit</button>
                <button
                  className="text-red-600 cursor-pointer"
                  onClick={() => {
                    deleteTask(tasks, task.id, setTasks);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TodoCards;
