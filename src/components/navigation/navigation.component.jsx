import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar.component";
import Footer from "../footer/footer.component";
export default function Navigation() {
  return (
    <>
      <div className="z-50">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </>
  );
}
