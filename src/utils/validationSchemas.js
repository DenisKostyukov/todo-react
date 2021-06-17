import * as yup from 'yup';

export const INPUT_SCHEMA = yup
  .string()
  .matches(/^.{8,}$/, 'Введите минимум 8 символов')
  .required('Введите текст');

export const NEW_TASK_SCHEMA = yup.object({
  task: INPUT_SCHEMA,
});
