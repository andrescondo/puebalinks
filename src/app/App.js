import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import Login from '../containers/Login';
import PrivateRouter from '../routes/PrivateRouter';
import PublicRouter from '../routes/PublicRouter';

import './styles/style.css'
import CreateUser from '../containers/CreateUser';
import ViewUser from '../containers/ViewUser';
import EditUser from '../containers/EditUser';

const App = () => {
  return (
    <BrowserRouter>
      <Layout >
        <Switch>
          <PrivateRouter exact path={'/home'} component={Home} />
          <PrivateRouter exact path={'/create-user'} component={CreateUser} />
          <PrivateRouter exact path={'/view-user/:id'} component={ViewUser} />
          <PrivateRouter exact path={'/edit-user/:id'} component={EditUser} />

          <PublicRouter exact path="/auth/login" component={Login} />
          <PublicRouter exact path="/auth/signup" component={Login} />
        </Switch>

      </Layout>
    </BrowserRouter>
  )
}

export default App;
