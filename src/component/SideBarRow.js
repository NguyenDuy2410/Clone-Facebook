import React from "react";
import "./SideBarRow.css";
function SideBarRow({ src, Icon, title }) {
  return (
    <div className="SideBarRow">
      {src && <img className="header" src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SideBarRow;
