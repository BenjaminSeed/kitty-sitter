import React from "react";
import { social, links } from "./Data";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import img from "../assets/Kitty_Sitter_200x200.png";

const Navbar = () => {
  return (
    <nav className="container">
      <div>
        <Link to="/" className="nav-img">
          <img src={img} />
        </Link>
      </div>

      <div>
        <ul className="links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
        <h1 className="nav-title">Kitty Sitter</h1>
      </div>

      <div>
        <ul className="social-icons">
          {social.map((icons) => {
            const { id, url, icon } = icons;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
