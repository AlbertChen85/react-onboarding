import axios from 'axios';
import { BASE_URL } from './constant';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useCreateTask() {
  const queryClient = useQueryClient();

  const { mutate: createTask } = useMutation({
    mutationFn: async (taskData: any) => {
      const res = await axios.post(`${BASE_URL}/api/task`, taskData);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      queryClient.invalidateQueries({ queryKey: ['task'] });
    },
  });
  return { createTask };
}
