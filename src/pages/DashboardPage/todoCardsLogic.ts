type TaskId = `${string}-${string}-${string}-${string}-${string}`;

type Tasks = {
    id: `${string}-${string}-${string}-${string}-${string}`;
    taskName: string;
    taskDescription: string;
    taskDueDate: string;
    taskProgress: string;
  }[];

type SetTasks = React.Dispatch<
  React.SetStateAction<
    Tasks
  >
>;

export function deleteTask(tasks: Tasks, taskId: TaskId , setTasks: SetTasks) {
  const newArr = tasks.filter(
    (indenticalTask) => indenticalTask.id !== taskId
  );
  localStorage.setItem("tasks", JSON.stringify(newArr));
  setTasks(newArr);
}
