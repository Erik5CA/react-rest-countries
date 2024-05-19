import { useState } from "react";
import { DarkIcon, LightIcon } from "./Icons";

/**
 * This is the main component for the BarSup.
 * It displays the title of the application and a toggle button for switching between light and dark themes.
 *
 * @returns {JSX.Element} - The JSX element for the BarSup component.
 */
export default function BarSup() {
  /**
   * The state variable to hold the current theme mode.
   * It can be either "Dark" or "Light".
   */
  const [theme, setTheme] = useState("Dark");

  /**
   * This function is called when the user clicks on the theme toggle button.
   * It toggles the theme mode between "Dark" and "Light" and updates the corresponding CSS class.
   */
  const changeTheme = () => {
    const root = document.body;
    root.classList.toggle("light");
    setTheme(theme === "Dark" ? "Light" : "Dark");
  };

  return (
    <section className="container-barra element">
      <div className="barra ">
        <h1 className="title">Where in the World?</h1>
        <div onClick={changeTheme} className="container-dark-mode">
          {theme === "Dark" ? <DarkIcon /> : <LightIcon />}
          <h4 className="title">{`${theme}`} Mode</h4>
        </div>
      </div>
    </section>
  );
}
