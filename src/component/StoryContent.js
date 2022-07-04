import React from "react";
import "./StoryContent.css";
function StoryContent({ src, image, title }) {
  return (
    <div className="StoryContent">
      <img className="Storyavatar" src={src} />
      <img className="Storyimage" src={src} />
      <h4 className="titleStory">{title}</h4>
    </div>
  );
}

export default StoryContent;
