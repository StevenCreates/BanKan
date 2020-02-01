import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { RootContext } from "./context/RootContext";

function AuthenticatedRoute = ({ render, ...routeProps }) => {
  const { authenticated } = useContext(RootContext);
  return (
    <Route
      {...routeProps}
      render={() => (authenticated ? render() : <Redirect to='/login' />)}
    />
  );
};

export default AuthenticatedRoute;
