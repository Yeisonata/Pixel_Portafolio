import React, { useEffect, useState } from "react";
import "../style/App.css"; // asegúrate que esta ruta sea correcta


const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  useEffect(() => {
    const body = document.body;
    if (isLight) {
      body.classList.add("light-mode");
    } else {
      body.classList.remove("light-mode");
    }
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }, [isLight]);

  return (
    <button className="theme-toggle" onClick={() => setIsLight(!isLight)}>
      {isLight ? "🌙 Modo Oscuro" : "🌞 Modo Claro"}
    </button>
  );
};

export default ThemeToggle;
