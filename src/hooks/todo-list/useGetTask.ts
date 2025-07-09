import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "./constant";

export function useGetTask(taskId: string) {
  const [task, setTask] = useState<any>(null);

  useEffect(() => {
    if (!taskId) return;

    axios
      .get(`${BASE_URL}/api/task/${taskId}`)
      .then((res) => setTask(res.data))
      .catch((err) => {
        console.error('Error fetching task by ID:', err);
      });
  }, [taskId]);

  return { task };
}