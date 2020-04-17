import React, { useReducer } from "react";
import { Route, Switch, Router } from "react-router-dom";


import history from "./utilities/history";
import Login from "./components/Login/Login";
import { reducer } from "./redux/reducers/reducer";
import { AppContext } from "./utilities/context";
import { initialState } from "./redux/store/store";
import { ProtectedRoute } from "./utilities/ProtectedRoute";
import { useAuth0 } from "./react-auth0-spa";
import MainNavBar from "./components/MainNavBar/MainNavBar";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <AppContext.Provider value={{ state, dispatch }}>
        <Router history={history}>
          <Switch>
            <ProtectedRoute path="/main" component={MainNavBar} />
            <Route path="/" exact component={Login} />
          </Switch>
        </Router>
      </AppContext.Provider>
    </div>
  );
};

export default App;
