import React from "react";
import "./SideBarRightRow.css";

function SideBarRightRow({ avatar, username }) {
  return (
    <div className="SideBarRightRow">
      <div className="circleAvatar"></div>
      <img src={avatar} />
      <h1>{username}</h1>
    </div>
  );
}

export default SideBarRightRow;
