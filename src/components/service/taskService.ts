import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export function useTasks() {
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

export function useTaskStatus() {
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

export function useTaskById(taskId: string) {
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
