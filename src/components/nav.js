import React from "react";
// <Link> replaces the <a> so the page doesn't re-render on every link
// instead, it routes, which is way faster
// <Link> hs the "to=" attribute not "href"
import { Link } from "gatsby";
import "./nav.css";

const Nav = () => (
  <nav className="nav">
    <ul className="nav-list">
      <li className="nav-list-item">
        <Link activeStyle={{ borderBottom: "2px solid #a64ac9" }} to="/">
          Home
        </Link>
      </li>
      <li className="nav-list-item">
        <Link activeStyle={{ borderBottom: "2px solid #a64ac9" }} to="/about">
          About
        </Link>
      </li>
      <li className="nav-list-item">
        <Link activeStyle={{ borderBottom: "2px solid #a64ac9" }} to="/blog">
          Blog
        </Link>
      </li>
      <li className="nav-list-item">
        <Link activeStyle={{ borderBottom: "2px solid #a64ac9" }} to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav;
