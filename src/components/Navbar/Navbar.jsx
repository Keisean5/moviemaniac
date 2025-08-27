import React from "react";

import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieManiac</h1>

      <div className="navbar_links">
        <DarkMode />
        <a href="#popular">
          {" "}
          {/* set the link to scroll to the page that has popular */}
          Popular <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </a>
        <a href="#top_rated">
          {" "}
          {/* set the link to scroll to the page that has top_rated */}
          Top Rated <img src={Star} alt="star emoji" className="navbar_emoji" />
        </a>
        <a href="#upcoming">
          {" "}
          {/* set the link to scroll to the page that has upcoming */}
          Upcoming{" "}
          <img src={Party} alt="party face emoji" className="navbar_emoji" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
