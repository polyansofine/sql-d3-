import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AdminHeader } from "./AdminComponent/AdminHeader";
import PrivateRouter from "./AdminComponent/PrivateRouter";
import { AdminLogin } from "./AdminLogin";
import { AdminMainSetting } from "./AdminMainSetting";
import { AdminSensorSetting } from "./AdminSensorSetting";

export const AdminPage = () => {
  return (
    <>
      <AdminHeader />
      <Switch>
        <Route path="/admin/setting/login" component={AdminLogin} />
        <PrivateRouter
          path="/admin/setting/main"
          component={AdminMainSetting}
        />
        <PrivateRouter
          path="/admin/setting/sensor"
          component={AdminSensorSetting}
        />
        <Redirect from="/admin/setting" to="/admin/setting/main" />
      </Switch>
    </>
  );
};
