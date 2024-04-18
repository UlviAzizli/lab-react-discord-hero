import "./App.css";
import React from "react";

import discordLogo from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";
import backImg from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <section>
        <div className="nav">
          <img className="logo" src={discordLogo} alt="Discord Logo" />
          <img className="icon" src={menuIcon} alt="Menu icon" />
        </div>
        <div className="article">
          <h1>
            IMAGINE A <br></br>PLACE...
          </h1>
          <p className="text">
            ..where you can belong to a school club, a gaming gruoup, or a
            worlwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
          <button className="download-button">Download for Mac</button>
          <button className="open-discord-button">
            Open Discord in your browser
          </button>
        </div>

        <img className="background" src={backImg} alt="Background image" />
      </section>
    </div>
  );
}

export default App;
