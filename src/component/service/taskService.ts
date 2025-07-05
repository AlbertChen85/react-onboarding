import {
  getTasks,
  createTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  getTastStatus,
} from '../api/task-api-helper';

export const getAllTasks = async () => {
  const response = await getTasks();
  return response.data;
};

export const createNewTask = async (taskData: any) => {
  const response = await createTask(taskData);
  return response.data;
};

export const getTaskByIdService = async (taskId: string) => {
  const response = await getTaskById(taskId);
  return response.data;
};

export const updateTaskByIdService = async (taskId: string, taskData: any) => {
  const response = await updateTaskById(taskId, taskData);
  return response.data;
};

export const deleteTaskByIdService = async (taskId: string) => {
  const response = await deleteTaskById(taskId);
  return response.data;
};

export const getTaskStatusService = async () => {
  const response = await getTastStatus();
  return response.data;
};
