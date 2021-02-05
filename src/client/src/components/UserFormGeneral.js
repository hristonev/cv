import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, propTypes, Field } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';
import * as FormFiled from './FormField';

const UserFormGeneral = props => {
  return (
    <Form onSubmit={props.handleSubmit(props.onSubmit)}>
      <Form.Group widths='equal'>
        <Field
          name="first_name"
          component={FormFiled.Text}
          label="First Name"
          placeholder="First Name"
          required
        />
        <Field
          name="last_name"
          component={FormFiled.Text}
          label="Last Name"
          placeholder="Last Name"
          required
        />
      </Form.Group>
      <Form.Group widths='equal'>
        <Field
          name="email"
          component={FormFiled.Text}
          label="EMail Address"
          placeholder="EMail Address"
          required
        />
        <Field
          name="phone"
          component={FormFiled.Text}
          label="Phone Number"
          placeholder="Phone Number"
        />
      </Form.Group>
      <Button>{props.actionName}</Button>
    </Form>
  );
}

UserFormGeneral.propTypes = propTypes;

const validate = formValues => {
  const errors = {};

  if(!formValues.first_name){
    errors.first_name = 'First Name is required!';
  }

  if(!formValues.last_name){
    errors.last_name = 'Last Name is required!';
  }

  if(!formValues.email){
    errors.email = 'Email is required!';
  }

  return errors;
};

export default reduxForm({
  form: 'user_general',
  validate
})(connect(null, {})(UserFormGeneral));
