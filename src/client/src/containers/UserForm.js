import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';
import UserFormGeneral from '../components/UserFormGeneral';
import { createUser } from '../actions';

class UserForm extends React.Component
{
  constructor(props) {
    super(props);

    this.handleGeneralInfoSubmit = this.handleGeneralInfoSubmit.bind(this);
  }

  handleGeneralInfoSubmit(formValues)
  {
    this.props.createUser(formValues);
  }

  render() {
    return (
      <Card.Group>
        <Card fluid color="red">
          <Card.Content header="General Information"/>
          <Card.Content>
            <UserFormGeneral onSubmit={this.handleGeneralInfoSubmit} actionName="Save General Info"/>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}

export default connect(null, { createUser })(UserForm);
