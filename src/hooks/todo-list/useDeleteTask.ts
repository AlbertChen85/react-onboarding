import axios from "axios";
import { BASE_URL } from "./constant";

export function useDeleteTask() {
  const deleteTask = async (taskId: string) => {
    try {
      const res = await axios.delete(`${BASE_URL}/api/task/${taskId}`);
      return res.data;
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  return { deleteTask };
}