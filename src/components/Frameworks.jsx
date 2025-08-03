import React from "react";
import { OrbitingCircles } from "./OrbitingCircles";
import "../style/Frameworks.css";
const skills = [
  "auth0", "blazor", "cplusplus", "csharp", "css3", "dotnet",
  "git", "html5", "javascript", "microsoft", "react", "sqlite",
  "tailwindcss", "vitejs", "wordpress"
];

export function Frameworks() {
  return (
   <div className="frameworks-container">
  <OrbitingCircles iconSize={20}>
    {skills.map((skill, index) => (
      <img
        key={index}
        src={require(`../assets/logos/${skill}.svg`)}
        alt={skill}
        className="orbit-icon"
      />
    ))}
  </OrbitingCircles>

  <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
    {[...skills].reverse().map((skill, index) => (
      <img
        key={index}
        src={require(`../assets/logos/${skill}.svg`)}
        alt={skill}
        className="orbit-icon"
      />
    ))}
  </OrbitingCircles>
</div>

  );
}
