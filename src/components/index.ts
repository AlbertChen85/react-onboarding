import { z } from 'zod';

export { StyledToggleButton } from './styled-toggle-button';
export { HeaderBar } from './headerBar';
export { Field } from './hook-form/fields';
export { UseThemeContext } from './user-preference-context';

export const createTaskFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  statusId: z.number({
    errorMap: () => ({ message: 'Status is required.' }),
  }),
  description: z.string().min(1, { message: 'Description is required.' }),
});

export type CreateTaskFormSchemaType = z.infer<typeof createTaskFormSchema>;
