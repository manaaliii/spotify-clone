import React from "react";
import "../styles/player.css";
import Body from "./Body";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar spotify={spotify}/> 
        <Body/> 
      </div>
      <Footer/>
    </div>
  );
}

export default Player;
