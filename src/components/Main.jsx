import React from "react";
import "../style/Main.css";
import logo from "../assets/logo.jpeg";
import { Frameworks } from "./Frameworks";
import TerminalIntro from "./TerminalIntro";

const Main = () => {
  return (
    <main className="main-profile">
      {/* Sección visual simple: avatar + nombre */}
      <div className="avatar-section">
        <img src={logo} alt="Avatar" className="avatar-img" />
        <h2 className="username">Yeisonata</h2>
      </div>
<TerminalIntro />

      {/* Frameworks decorativo en background */}
      <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125 pointer-events-none">
        <Frameworks />
      </div>
      
    </main>
  );
};

export default Main;
