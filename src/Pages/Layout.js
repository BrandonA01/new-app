import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../Navigation/nav";
import Home from "./Home";
import TicTacToe from "./TicTacToe";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div id="content">
        <Outlet/>
      </div>
    </>
  );
};

export default Layout;