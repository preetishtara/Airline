import React from "react";
import Nav from "./nav";
import { Outlet } from "react-router-dom";

const layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Outlet />
    </div>
  );
};

export default layout;
