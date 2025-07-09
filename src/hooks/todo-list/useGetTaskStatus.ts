import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "./constant";
import { Status } from "./type";

export function useGetTaskStatus() {
  const [status, setStatus] = useState<Status[]>([]);

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