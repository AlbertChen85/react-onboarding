'use client';

import React from 'react';
import { Form, FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { createTaskFormSchema, CreateTaskFormSchemaType, Field } from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, MenuItem, Typography } from '@mui/material';
import { useGetTaskStatus, useUpdateTask } from '@/hooks/todo-list';
import { TaskRow } from '@/hooks/todo-list/type';

export function UpdateTaskList({ taskId, defaultRow }: { taskId: string; defaultRow?: TaskRow }) {
  return (
    <Box>
      <Typography variant="h4" component="div" color="black">
        Create Task List Demo
      </Typography>
      <CreateTaskList taskId={taskId} defaultRow={defaultRow} />
    </Box>
  );
}

export function CreateTaskList({ taskId, defaultRow }: { taskId: string; defaultRow?: TaskRow }) {
  const { data: status } = useGetTaskStatus();
  const { mutate } = useUpdateTask();

  const method = useForm<CreateTaskFormSchemaType>({
    resolver: zodResolver(createTaskFormSchema),
    defaultValues: {
      name: defaultRow?.name ?? '',
      statusId: defaultRow?.statusId ?? undefined,
      description: defaultRow?.description ?? '',
    },
    mode: 'onChange',
  });
  const { handleSubmit, formState } = method;

  const onSubmit: SubmitHandler<CreateTaskFormSchemaType> = async (fromData) => {
    console.log(fromData);
    const data: TaskRow = {
      name: fromData.name,
      statusId: fromData.statusId,
      description: fromData.description,
      id: taskId,
    };
    mutate({ taskId, taskData: data });
  };

  const onError: SubmitErrorHandler<CreateTaskFormSchemaType> = (errors) => {
    console.error(errors);
  };

  return (
    <FormProvider {...method}>
      <Box style={{ width: '100%' }}>
        <Box
          p={4}
          mt={2}
          height={'auto'}
          sx={{ border: '1px solid #e0e0e0', borderRadius: 2, mb: 2 }}
          width={'100%'}
          mx="auto"
        >
          <Form>
            <Box display="flex" gap={2} justifyContent="flex-start" alignItems="center">
              <Typography component="label" color="black" sx={{ textAlign: 'center' }}>
                Title
              </Typography>
              <Field.Text name="name" sx={{ textAlign: 'center' }} />
              <Typography component="label" color="black" sx={{ textAlign: 'center' }}>
                Status
              </Typography>
              <Field.Select name="statusId" label="status">
                {status?.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </Field.Select>
              <Typography component="label" color="black" sx={{ textAlign: 'center' }}>
                Description
              </Typography>
              <Field.Text name="description" sx={{ textAlign: 'center' }} />
            </Box>
          </Form>
        </Box>
        <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
          <Button
            variant="contained"
            onClick={handleSubmit(onSubmit, onError)}
            disabled={!formState.isDirty}
          >
            Update
          </Button>
        </Box>
      </Box>
    </FormProvider>
  );
}
