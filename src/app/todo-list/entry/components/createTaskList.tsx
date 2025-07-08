'use client';

import React from 'react';
import { Form, FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { createTaskFormSchema, CreateTaskFormSchemaType, Field } from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, MenuItem, Typography } from '@mui/material';
import { useCreateTask, useGetTaskStatus } from '@/hooks/todo-list';

export function CreateTaskList() {
  return (
    <Box>
      <Typography variant="h4" component="div" color="black">
        Create Task List Demo
      </Typography>
      {createTaskList()}
    </Box>
  );
}

export function createTaskList() {
  const { status } = useGetTaskStatus();

  const { createTask } = useCreateTask();

  const method = useForm<CreateTaskFormSchemaType>({
    resolver: zodResolver(createTaskFormSchema),
    defaultValues: {
      name: '',
      statusId: 1,
      description: '',
    },
    mode: 'onChange',
  });
  const { handleSubmit, getValues } = method;

  const onSubmit: SubmitHandler<CreateTaskFormSchemaType> = async (fromData) => {
    await createTask(fromData);
    console.log(fromData);
  };

  const onError: SubmitErrorHandler<CreateTaskFormSchemaType> = (errors) => {
    console.log(getValues());
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
                {status.map((option) => (
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
          <Button variant="contained" onClick={handleSubmit(onSubmit, onError)}>
            Submit
          </Button>
        </Box>
      </Box>
    </FormProvider>
  );
}
