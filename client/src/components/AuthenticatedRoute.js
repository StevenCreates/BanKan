import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { RootContext } from "../context/RootContext";
import { AuthenticatedRoute } from "../AuthenticateRoute";

export default ({ render, ...routeProps }) => {
  const { authenticated } = useContext(RootContext);
  console.log(authenticated);
  return (
    <AuthenticatedRoute
      {...routeProps}
      render={() => (authenticated ? render() : <Redirect to='/login' />)}
    />
  );
};
