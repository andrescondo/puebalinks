import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import Login from '../containers/Login';
import PrivateRouter from '../routes/PrivateRouter';
import PublicRouter from '../routes/PublicRouter';

const App = () => {
  return (
    <BrowserRouter>
      <Layout >
        <Switch>
          <PrivateRouter exact path={'/home'} component={Home} />
          <PublicRouter exact path="/auth/login" component={Login} />
        </Switch>

      </Layout>
    </BrowserRouter>
  )
}

export default App;
