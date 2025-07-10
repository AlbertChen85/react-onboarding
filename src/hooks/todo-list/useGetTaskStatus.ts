import axios from 'axios';
import { BASE_URL } from './constant';
import { Status } from './type';
import { useQuery } from '@tanstack/react-query';

export function useGetTaskStatus() {
  const query = useQuery<Status[]>({
    queryKey: ['task-status'],
    queryFn: async () => {
      const result = await axios.get<Status[]>(`${BASE_URL}/api/task-status`);
      return result.data;
    },
  });

  return query;
}
