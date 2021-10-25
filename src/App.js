import React, { lazy, Suspense } from "react";
import "./App.css";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./component/Header";
import { Provider } from "react-redux";
import store from "./store/store";
import Loading from "./common/Loading";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
const hist = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router history={hist}>
            <Header />
            <Suspense fallback={Loading}>
              <Switch>
                <Route
                  exact
                  path="/logpage"
                  component={lazy(() => import("./view/LogPage"))}
                />
                <Route
                  exact
                  path="/"
                  component={lazy(() => import("./view/ChartPage"))}
                />
              </Switch>
            </Suspense>
          </Router>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
