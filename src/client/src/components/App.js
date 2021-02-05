import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import history from '../history';
import Header from './Header';
import Users from '../containers/Users';
import UserCreate from './UserCreate';
import UserEdit from './UserEdit';

const App  = () => {
  return (
    <Router history={history}>
      <Container>
        <Header />
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/user/create" exact component={UserCreate} />
          <Route path="/user/:user/edit" exact component={UserEdit} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;