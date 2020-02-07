import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { RootContext } from "./context/RootContext";

// default ({ render, ...routeProps }) => {
//   const { userState } = useContext(RootContext);
//   return (
//     <Route
//       {...routeProps}
//       render={() => (userState ? render() : <Redirect to='/login' />)}
//     />
//   );
// };

function AuthenticatedRoute({ children, ...rest }) {
  const { userState } = useContext(RootContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userState.success ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export { AuthenticatedRoute };
