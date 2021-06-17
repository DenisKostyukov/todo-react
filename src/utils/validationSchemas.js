import * as yup from 'yup';

export const INPUT_SCHEMA = yup
  .string()
  .matches(/^.{8,}$/, 'Min 8 symbols')
  .required();

export const NEW_TASK_SCHEMA = yup.object({
  task: INPUT_SCHEMA,
});
