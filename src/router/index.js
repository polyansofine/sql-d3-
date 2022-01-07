import React, { lazy, Suspense } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Loading from "../common/Loading";
import Header from "../component/Header";
import { AdminPage } from "../view/AdminPage";

const hist = createBrowserHistory();

export const CustomRouter = () => {
  return (
    <>
      <Router history={hist}>
        <Suspense fallback={Loading}>
          <Switch>
            <Route
              exact
              path="/logpage"
              component={lazy(() => import("../view/LogPage"))}
            />
            <Route path="/admin/setting">
              <AdminPage />
            </Route>
            <Route
              exact
              path="/"
              component={lazy(() => import("../view/ChartPage"))}
            />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
};
