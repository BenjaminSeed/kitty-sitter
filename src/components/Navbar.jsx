import React from "react";
import { social, links } from "./Data";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="container">
      <div>
        <div>
          <img src="" alt="" />
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
