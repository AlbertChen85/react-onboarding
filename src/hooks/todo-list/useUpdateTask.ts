import axios from "axios";
import { BASE_URL } from "./constant";

export function useUpdateTask() {
  const updateTask = async (taskId: string, taskData: any) => {
    try {
      const res = await axios.put(`${BASE_URL}/api/task/${taskId}`, taskData);
      return res.data;
    } catch (err) {
      console.error('Error updating task:', err);
    }
  };

  return { updateTask };
}