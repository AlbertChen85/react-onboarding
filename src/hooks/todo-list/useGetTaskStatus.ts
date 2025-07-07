import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "./constant";

export function useGetTaskStatus() {
  const [status, setStatus] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/task-status`)
      .then((res) => setStatus(res.data))
      .catch((err) => {
        console.error('Error fetching task status:', err);
      });
  }, []);

  return { status };
}