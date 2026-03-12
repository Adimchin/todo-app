import { useState } from "react";
import { addTasks } from "./AddTaskLogic";
import { useSearchParams } from "react-router";

type AddTaskPageProp = {
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
};

type EditTask =
  | {
      id: `${string}-${string}-${string}-${string}-${string}`;
      taskName: string;
      taskDescription: string;
      taskDueDate: string;
      taskProgress: string;
    }
  | undefined;

function AddTaskPage({ tasks }: AddTaskPageProp) {
  const [searchParams] = useSearchParams();

  const editTaskId = searchParams.get("task");

  let editTask: EditTask;

  if (editTaskId) {
    editTask = tasks.find((task) => task.id === editTaskId);
  }

  const [inputValue, setInputValues] = useState(
    !editTask
      ? {
          "task-description": "",
          Status: "To-do",
          "due-date": "",
          "task-title": "",
        }
      : {
          "task-description": editTask.taskDescription,
          Status: editTask.taskProgress,
          "due-date": editTask.taskDueDate,
          "task-title": editTask.taskName,
        },
  );

  const handleInput = (event: any) => {
    setInputValues({
      ...inputValue,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
      <title>
        {editTaskId ? "todo-app | Edit-task" : "todo-app | Add-task"}
      </title>
      <div className="h-screen flex justify-center items-center">
        <div className="shadow py-6 px-9 bg-white w-115 rounded-md hover:shadow-md hover:-mt-1">
          <div className="text-center text-2xl font-semibold mb-10">
            Add to Tasks
          </div>
          <form className="flex flex-col gap-7" action={"/"}>
            <div>
              <label htmlFor="task-title" className="add-to-task-input-label">
                Task Title
              </label>
              <input
                value={inputValue["task-title"]}
                placeholder="Enter task name"
                type="text"
                required
                id="task-title"
                className="add-to-task-input"
                onChange={handleInput}
              />
            </div>
            <div>
              <label
                htmlFor="task-description"
                className="add-to-task-input-label"
              >
                Task description
              </label>
              <textarea
                value={inputValue["task-description"]}
                placeholder="Enter task description"
                id="task-description"
                required
                className="add-to-task-input h-30"
                onChange={handleInput}
              />
            </div>
            <div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="Status" className="add-to-task-input-label">
                    Status
                  </label>
                  <select
                    value={inputValue["Status"]}
                    className="add-to-task-input inline-block"
                    id="Status"
                    required
                    onChange={handleInput}
                  >
                    <option value="To-do">To-do</option>
                    <option value="In-progress">In-progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="due-date"
                    className="add-to-task-input-label inline-block"
                  >
                    Due-date
                  </label>
                  <input
                    value={inputValue["due-date"]}
                    type="date"
                    className="add-to-task-input"
                    id="due-date"
                    required
                    onChange={handleInput}
                  />
                </div>
              </div>
            </div>
            <button
              className="block text-center py-3 bg-blue-500 rounded-md text-white font-semibold hover:bg-blue-300"
              onClick={() => {
                addTasks(tasks, inputValue, editTask);
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTaskPage;
