import React from 'react';
import { Route, Redirect, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function PrivateRouter({ component: Component, ...rest }) {
  const {isLogged} = useAuth();
  const location = useLocation();

  return (
    <Route {...rest}>
      {!isLogged ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/" , state: { from: location }}} />
      )}
    </Route>
  );
}