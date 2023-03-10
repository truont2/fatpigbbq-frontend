import React, { Fragment } from "react";
import { Outlet} from "react-router-dom";

export default function Navigation() {
  return (
    <Fragment>
      navigation.component
      <Outlet />
    </Fragment>
  );
}
