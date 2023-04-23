import React from "react";
import { social, links } from "./Data";
import "../styles/Navbar.css";
import img from "../assets/Kitty_Sitter_200x200.png";

const Navbar = () => {
  return (
    <nav className="container">
      <div>
        <div className="nav-img">
          <img src={img} />
        </div>
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

// need to import react icons.
// create state, such as showLinks/ setShowlinks
// then create a toggleLinks function for setShowlinks (!showLinks)

// create a logo and store in asserts. include this in the img element
// create a seperate file for links and map over this. include an id url and text
// return this as a list
// do the same as above for the social icons

// check the navbar project for css
