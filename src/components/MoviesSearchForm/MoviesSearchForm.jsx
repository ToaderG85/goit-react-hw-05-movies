import React from 'react';
import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types';
import style from './MoviesSearchForm.module.css';

export function MoviesSearchForm({ onSubmit }) {
  return (
    <Formik initialValues={{ name: '' }} onSubmit={onSubmit}>
      <Form className={style.form}>
        <Field
          className={style.input}
          name="name"
          placeholder="Search movie"
          type="text"
          autoFocus
        />
        <button className={style.button} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
}
MoviesSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};