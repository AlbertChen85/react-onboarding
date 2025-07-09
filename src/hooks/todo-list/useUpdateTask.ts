import axios from 'axios';
import { BASE_URL } from './constant';
import { TaskRow } from './type';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useUpdateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ taskId, taskData }: { taskId: string; taskData: TaskRow }) => {
      if (!taskId) {
        throw new Error('Task ID is required');
      }
      const result = await axios.put(`${BASE_URL}/api/task/${taskId}`, taskData);
      return result.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      queryClient.invalidateQueries({ queryKey: ['task'] });
    },
  });
}
