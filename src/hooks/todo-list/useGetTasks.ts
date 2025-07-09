import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { BASE_URL } from "./constant";


export function useGetTasks() {
  const [tasks, setTasks] = useState<any[]>([]);

  const fetchTasks = useCallback(async () => {
    try {
      const result = await axios.get(`${BASE_URL}/api/task`);
      setTasks(result.data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return { tasks };
}