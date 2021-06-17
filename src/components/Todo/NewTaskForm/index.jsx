import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { NEW_TASK_SCHEMA } from '../../../utils/validationSchemas';
const initialValues = {
  task: '',
};

function NewTaskForm ({ todo, setTodo }) {
  return (
    <Formik
      onSubmit={(values, actions) => {
        setTodo(
          todo.push({
            id: todo.length + 1,
            task: values.task,
            isCompleted: false,
          })
        );
        console.log(values.task);
        actions.setSubmitting(false);
        actions.resetForm();
      }}
      initialValues={initialValues}
      validationSchema={NEW_TASK_SCHEMA}
    >
      {formikProps => {
        return (
          <Form>
            <Field type='text' name='task' placeholder='Your task' />
            <ErrorMessage name='task' />
            <Field type='submit' value='submit' />
          </Form>
        );
      }}
    </Formik>
  );
}

export default NewTaskForm;
