import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import * as fuseActions from "../../../../store/actions";
import auth from "./auth-helper";

// eslint-disable-next-line react/prop-types
const PrivateRouter = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(({ admin }) => admin);
  useEffect(() => {
    if (!auth.isAdmined()) {
      dispatch(
        fuseActions.showMessage({
          message: "you dont have access to that page",
          variant: "error",
        })
      );
    }
  }, [isAuthenticated]);
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isAdmined() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/admin/setting/login",

              // eslint-disable-next-line react/prop-types
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRouter;
