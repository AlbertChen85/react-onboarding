import axios from 'axios';
import { BASE_URL } from './constant';
import { useQuery } from '@tanstack/react-query';
import { TaskResponse } from './type';

export function useGetTasks(params: { name?: string; page?: number; size?: number } = {}) {
  const { name = '', page = 1, size = 10 } = params;

  const { data, isLoading, isError, error } = useQuery<TaskResponse>({
    queryKey: ['tasks', name, page, size],
    queryFn: async () => {
      const result = await axios.get<TaskResponse>(`${BASE_URL}/api/task`, {
        params: { name, page, size },
      });
      const raw = result.data;
      return raw;
    },
  });

  return {
    tasks: data,
    isLoading,
    isError,
    error,
  };
}
