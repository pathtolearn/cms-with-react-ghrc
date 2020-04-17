import React, { useContext } from "react";

import { Redirect, Route } from "react-router-dom";
import { AppContext } from "./context";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { state } = useContext(AppContext);
  const { userType } = state;

  return (
    <Route
      {...rest}
      render={(props) =>
        userType ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};
