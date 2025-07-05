import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const getTasks = () => {
  return axios.get(`${BASE_URL}/api/task`);
};

export const createTask = (taskData: any) => {
  return axios.post(`${BASE_URL}/api/task`, taskData);
};

export const getTaskById = (taskId: string) => {
  return axios.get(`${BASE_URL}/api/task/${taskId}`);
};

export const updateTaskById = (taskId: string, taskData: any) => {
  return axios.put(`${BASE_URL}/api/task/${taskId}`, taskData);
};

export const deleteTaskById = (taskId: string) => {
  return axios.delete(`${BASE_URL}/api/task/${taskId}`);
};

export const getTastStatus = () => {
  return axios.get(`${BASE_URL}/api/task-status`);
};
