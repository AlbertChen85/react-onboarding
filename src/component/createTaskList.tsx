'use client';

import React, { useEffect, useState } from 'react';
import { FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { createTaskFormSchema, CreateTaskFormSchemaType, Field } from '@/component';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, MenuItem, Typography } from '@mui/material';
import { createNewTask, getTaskStatusService } from './service/taskService';

export function CreateTaskList() {
  return (
    <div>
      <Typography variant="h4" component="div" color='black'>
        Create Task List Demo
      </Typography>
      {createTaskList()}
    </div>
  );
}

type Status = {
  id: number;
  name: string;
};

const createTaskList = () => {
  const [statusArray, setStatus] = useState<Status[]>([]);

  useEffect(() => {
    getTaskStatusService().then(setStatus).catch(console.error);
  }, []);

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

  const onSubmit: SubmitHandler<CreateTaskFormSchemaType> = (fromData) => {
    createNewTask(fromData)
      .then((response) => {
        console.log('Task created successfully:', response);
        // Optionally, you can reset the form or show a success message here
      })
      .catch((error) => {
        console.error('Error creating task:', error);
        // Optionally, you can show an error message here
      });
    console.log(fromData);
  };

  const onError: SubmitErrorHandler<CreateTaskFormSchemaType> = (errors) => {
    console.log(getValues());
    console.error(errors);
  };

  return (
    <FormProvider {...method}>
      <div style={{ width: '100%' }}>
        <Box
          p={4}
          mt={2}
          height={'auto'}
          sx={{ border: '1px solid #e0e0e0', borderRadius: 2, mb: 2 }}
          width={'100%'}
          mx="auto"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box display="flex" gap={2} justifyContent="flex-start" alignItems="center">
              <Typography component="label" color="black" sx={{ textAlign: 'center' }}>
                Title
              </Typography>
              <Field.Text name="name" sx={{ textAlign: 'center' }} />
              <Typography component="label" color="black" sx={{ textAlign: 'center' }}>
                Status
              </Typography>
              <Field.Select name="statusId" label="status">
                {statusArray.map((option) => (
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
          </form>
        </Box>
        <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
          <Button variant="contained" onClick={handleSubmit(onSubmit, onError)}>
            Submit
          </Button>
        </Box>
      </div>
    </FormProvider>
  );
};
