type tasks = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  taskName: string;
  taskDescription: string;
  taskDueDate: string;
  taskProgress: string;
}[];

type inputValue = {
  "task-description": string;
  Status: string;
  "due-date": string;
  "task-title": string;
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
//remove localstorage set item and use setter function

export function addTasks(
  tasks: tasks,
  inputValue: inputValue,
  editTask: EditTask,
) {

  // refactor
  
  if (editTask) {
    editTask.taskName = inputValue['task-title'];
    editTask.taskDescription = inputValue['task-description'];
    editTask.taskDueDate = inputValue['due-date'];
    editTask.taskProgress = inputValue['Status'];
    localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
  );
  return;
  }

  localStorage.setItem(
    "tasks",
    JSON.stringify([
      ...tasks,
      {
        id: crypto.randomUUID(),
        taskDescription: inputValue["task-description"],
        taskDueDate: inputValue["due-date"],
        taskName: inputValue["task-title"],
        taskProgress: inputValue["Status"],
      },
    ]),
  );
}
