import React from "react";
import "./Post.css";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { AiFillLike, AiOutlineComment } from "react-icons/ai";
import { FaRegShareSquare } from "react-icons/fa";
function Post({ avatar, icon, image, username, time, massage }) {
  return (
    <div className="Post">
      <p className="dot">...</p>
      <div className="Post_Top">
        <img className="Post_avatar" src={avatar} />
        <div className="title">
          <h3>{username}</h3>
          <div className="time" style={{ marginTop: "5px" }}>
            <h1>{time}.</h1>
            <GiEarthAfricaEurope style={{ fontSize: "12px" }} />
          </div>
        </div>
      </div>

      <div className="post_bottom">
        <p>{massage}</p>
      </div>
      <div className="post_image">
        <img src={image} />
      </div>
      <div className="Post_options">
        <div className="Post_option">
          <AiFillLike className="fontSize" />
          <p className="fontSize">Like</p>
        </div>
        <div className="Post_option">
          <AiOutlineComment className="fontSize" />
          <p className="fontSize">Comment</p>
        </div>
        <div className="Post_option">
          <FaRegShareSquare className="fontSize" />
          <p className="fontSize">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
