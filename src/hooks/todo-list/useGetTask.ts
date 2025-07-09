import axios from 'axios';
import { BASE_URL } from './constant';
import { TaskRow } from './type';
import { useQuery } from '@tanstack/react-query';

export function useGetTask(params: { taskId: string }) {
  const query = useQuery<TaskRow>({
    queryKey: ['task', params.taskId],
    queryFn: async () => {
      if (!params.taskId) {
        throw new Error('Task ID is required');
      }

      const result = await axios.get<TaskRow>(`${BASE_URL}/api/task/${params.taskId}`);
      return result.data;
    },
  });

  return query;
}
