import axios from "axios";
import { BASE_URL } from "./constant";

export function useCreateTask() {
  const createTask = async (taskData: any) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/task`, taskData);
      return res.data;
    } catch (err) {
      console.error('Error creating task:', err);
    }
  };

  return { createTask };
}