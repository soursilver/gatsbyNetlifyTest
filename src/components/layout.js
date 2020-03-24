import React from "react";
import PropTypes from "prop-types";
import Nav from "./nav";
import "./layout.css";

const Layout = ({ children }) => (
  <div className="layout">
    <Nav />
    <main className="main">{children}</main>
  </div>
)

// I need to understand how this works
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
