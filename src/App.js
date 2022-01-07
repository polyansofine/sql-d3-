import React, { lazy, Suspense } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import FuseMessage from "./component/FuseMessage";
import { CustomRouter } from "./router";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CustomRouter />
          <FuseMessage />
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
