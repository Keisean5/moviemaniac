import React from "react";

import "./DarkMode.css";
import Sun from "../../assets/Sun.svg?react";
import Moon from "../../assets/Moon.svg?react";

const DarkMode = () => {
  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark"); //select the body element and set the 'data-theme' to 'dark'
    localStorage.setItem("selectedTheme", "dark"); //keep the theme dark
  };

  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light"); //select the body element and set the 'data-theme' to 'light'
    localStorage.setItem("selectedTheme", "light"); //keep the theme light
  };

  const selectedTheme = localStorage.getItem("selectedTheme"); //when user refreshes, use local storage to keep the theme the user selected

  selectedTheme === "light" ? setLightTheme() : setDarkTheme; //dark mode is set by default. If light is selected, set the theme to light

  const toggleTheme = (e) => {
    e.target.checked ? setDarkTheme() : setLightTheme(); //have the toggle selected to what the user selected when refreshing
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme !== "light"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
