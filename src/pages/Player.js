import React from "react";
import "./Player.css";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import Footer from "../components/Footer";

function Player({ spotify }) {
  // console.log(spotify)
  return (
    <div className="player">
      <div className="player_body">
        {/* slidebar */}
        {/* body */}
        <Sidebar/>
        <Body spotify={spotify}/>
      </div>
      <Footer/>
      {/* footer */}
    </div>
  );
}

export default Player;
