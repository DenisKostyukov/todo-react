import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import InputForm from './InputForm';
import { NEW_TASK_SCHEMA } from '../../../utils/validationSchemas';
import style from './NewTaskForm.module.sass';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../redux/actions';
const initialValues = {
  task: '',
};

function NewTaskForm () {
  const dispatch = useDispatch();
  return (
    <Formik
      onSubmit={(values, actions) => {
        dispatch(addItem(values.task))
        actions.setSubmitting(false);
        actions.resetForm();
      }}
      initialValues={initialValues}
      validationSchema={NEW_TASK_SCHEMA}
    >
      {formikProps => {
        return (
          <Form className={style.form}>
            <Field component={InputForm} type='text' name='task' placeholder='Your task' />
            <ErrorMessage name='task' className={style.error} component="span"/>
            <Field className={style.buttonSubmit} type='submit' value='SUBMIT' />
          </Form>
        );
      }}
    </Formik>
  );
}

export default NewTaskForm;
