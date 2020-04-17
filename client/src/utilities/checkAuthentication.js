import React from "react";
import { useAuth0 } from "../../react-auth0-spa";

const checkAuthentication = (Wrapped) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  class CheckAuthentication extends React.Component {
    render() {
      <Wrapped {...this.props} />;
    }
  }
};
