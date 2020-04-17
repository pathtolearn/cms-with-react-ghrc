import React, { useContext } from "react";

import Header from "./Header";
import LoginButton from "./LoginButton";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { AppContext } from "../../utilities/context";
import { useAuth0 } from "../../react-auth0-spa";
import { LOGIN, GUEST_LOGIN } from "../../redux/actions/action_types";

import "../../styles.scss";

import { UserRequest } from "../../CMSService_pb";
import { userServiceClient } from "../../utilities/rpcClients";


const Login = () => {
  // need to get the dispatch here
  const { state, dispatch } = useContext(AppContext);
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const history = useHistory();

  const onGuestLogin = () => {
    dispatch({ type: GUEST_LOGIN });
  };

  const checkForAnyLogin = () => {
    let loggedIn = false;
    // check guest login
    const { userType } = state;
    if (userType === "GUEST") {
      loggedIn = true;
    } else if (isAuthenticated) {
      loggedIn = true;
      // get user info from state
      const { user: loginUser } = state;
      if (!loginUser) {
        const { user } = useAuth0();
        if (user) {
          // rpc call to store the logged in user info if not exists other wise nothing will be added
          userRequestRPC(user);
          dispatch({ type: LOGIN, payload: user });
        }
      }
    }

    if (loggedIn) {
      history.push("/main");
    }

    return loggedIn;
  };

  const userRequestRPC = (user) => {
    const req = new UserRequest();
    req.setName(user.name);
    req.setGivenName(user.give_name);
    req.setFamilyName(user.family_name);
    req.setNickName(user.nick_name);
    req.setEmail(user.email);
    req.setPicture(user.picture);
    req.setUserIdentity(user.sub);

    userServiceClient.checkAndCreateUser(req, {}, (err, response) => {
      if (err) console.log(err);
    });
  };

  return (
    <div>
      {!checkForAnyLogin() && (
        <React.Fragment>
          <Header />
          {/* at the center of the page add two buttons */}
          <div className="login-buttons">
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <LoginButton type="Guest" onSelection={onGuestLogin} />
              </Grid>
              <Grid item md={6} xs={12}>
                <LoginButton
                  type="User"
                  onSelection={() => loginWithRedirect({})}
                />
              </Grid>
            </Grid>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
export default Login;
