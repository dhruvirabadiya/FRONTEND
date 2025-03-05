import React from "react";
import { useTheme } from "./themeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <button onClick={toggleTheme} className="btn">
            {theme === 'light' ? "Switch to Dark Mode 🌙" : "Switch to Light Mode ☀️"}
        </button>
    )
}

export default ThemeToggle