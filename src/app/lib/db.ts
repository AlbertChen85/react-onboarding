import { v4 as uuidv4 } from 'uuid';

export type Task = {
  id: string;
  name: string;
  statusId: number;
  description: string;
  reactFlow: string;
};

export const taskDB: Task[] = [];

export function createTask(task: Omit<Task, 'id'>) {
  const newTask = {
    ...task,
    id: uuidv4(),
  };
  taskDB.push(newTask);
  return newTask;
}

export function findTaskById(id: string): Task | undefined {
  return taskDB.find((task) => task.id === id);
}

export function updateTask(id: string, updatedTask: Partial<Omit<Task, 'id'>>) {
  const taskIndex = taskDB.findIndex((task) => task.id === id);
  if (taskIndex === -1) return undefined;

  const existingTask = taskDB[taskIndex];
  const newTask = {
    ...existingTask,
    ...updatedTask,
  };

  taskDB[taskIndex] = newTask;
  return newTask;
}

export function deleteTask(id: string): boolean {
  const taskIndex = taskDB.findIndex((task) => task.id === id);
  if (taskIndex === -1) return false;

  taskDB.splice(taskIndex, 1);
  return true;
}
