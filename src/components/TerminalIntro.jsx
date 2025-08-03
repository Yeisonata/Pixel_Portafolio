// src/components/TerminalIntro.jsx
import React from "react";
import "../style/TerminalIntro.css";

const TerminalIntro = () => {
  return (
    <div className="terminal-box">
      <div className="terminal-bar">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="terminal-title">yeison@portfolio:~</span>
      </div>

      <div className="terminal-body">
        <p><span className="cmd">yeison@portfolio:~$</span> whoami</p>
        <p className="output">Yeison Tobón — Backend Dev, amante de Node.js + TypeScript</p>

        <p><span className="cmd">yeison@portfolio:~$</span> skills</p>
        <p className="output">JavaScript · TypeScript · Node.js · React · MySQL · TailwindCSS</p>

        <p><span className="cmd">yeison@portfolio:~$</span> location</p>
        <p className="output">📍 Pereira, Colombia</p>

        <p><span className="cmd">yeison@portfolio:~$</span> contact</p>
        <p className="output">📧 tobon055@gmail.com</p>
<p>
  <span className="cmd">yeison@portfolio:~$</span> <span className="blinking-cursor">█</span>
</p>

      </div>
    </div>
  );
};

export default TerminalIntro;
