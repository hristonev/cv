import React from 'react';
import { Form } from 'semantic-ui-react';

const renderError = ({error, touched}) => {
  if(error && touched){
    return {
      content: error
    };
  }
}

const Text = ({input, label, placeholder, required, meta}) => {
  return (
    <Form.Field>
      <Form.Input
        {...input}
        fluid
        label={label}
        placeholder={placeholder}
        error={renderError(meta)}
        autoComplete="off"
        required={required}
      />
    </Form.Field>
  );
}

export { Text };