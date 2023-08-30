import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from "../context/DataLayer";



function Sidebar() {

  const[{playlists},dispatch]=useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />

      <SidebarOptions Icons={HomeIcon} title="Home" />
      <SidebarOptions Icons={SearchIcon} title="Search" />
      <SidebarOptions Icons={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar_title">Playlists</strong>
      <hr />
       {playlists?.items?.map(playlist=>(
        <SidebarOptions title={playlist.name}/>
       ))}
     
    </div>
  );
}

export default Sidebar;
