import React from "react";
import { AppContext } from "../context/app.context";

export default function useDarkMode() {
  const { darkMode, toggleDarkMode } = React.useContext(AppContext);

  React.useEffect(() => {
    const htmlElement = window.document.querySelector("html");
    if (darkMode) {
      htmlElement?.classList.add("dark");
    }
    if (!darkMode) {
      htmlElement?.classList.remove("dark");
    }
  }, [darkMode]);

  return { darkMode, toggleDarkMode };
}
