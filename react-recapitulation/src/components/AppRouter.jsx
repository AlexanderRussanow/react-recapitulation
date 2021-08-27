import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthContext } from "../context/context";
import { publicRoutes, privatRoutes } from "../router/routes";

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? (
    <Switch>
      {privatRoutes.map((r) => (
        <Route component={r.component} exact={r.exact} path={r.path} key={r.path}/>
      ))}
      <Redirect to="/posts" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((r) => (
        <Route component={r.component} exact={r.exact} path={r.path} key={r.path}/>
      ))}
      <Redirect to="/login" />
    </Switch>
  );
};

export default AppRouter;
