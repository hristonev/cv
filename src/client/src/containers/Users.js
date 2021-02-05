import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import {List, Grid, Button} from 'semantic-ui-react';

class Users extends React.Component
{
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderItem(user) {
    return (
      <List.Item key={user.id}>
        <Grid columns={5} relaxed='very'>
          <Grid.Column>{user.first_name}</Grid.Column>
          <Grid.Column>{user.last_name}</Grid.Column>
          <Grid.Column>{user.email}</Grid.Column>
          <Grid.Column>{user.phone}</Grid.Column>
          <Grid.Column>
            <Button primary>Edit</Button>
            <Button color="red">Delete</Button>
          </Grid.Column>
        </Grid>
      </List.Item>
    );
  }

  render() {
    const { users } = this.props;

    return <List divided relaxed>{users.map(u => this.renderItem(u))}</List>;
  }
}

const mapStateToProps = ({users}) => {
  return {
    users: Object.values(users),
  }
}

export default connect(mapStateToProps, { fetchUsers })(Users);
