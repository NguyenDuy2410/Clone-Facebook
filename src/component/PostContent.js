import React from "react";
import "./PostContent.css";
import { RiLiveLine } from "react-icons/ri";
import { BiImage } from "react-icons/bi";
import { MdInsertEmoticon } from "react-icons/md";
function PostContent() {
  return (
    <div className="PostContent">
      <div className="PostContent_Top">
        <img src="avatar.jpg" className="avatarPost" alt="" />
        <form>
          <input
            type="text"
            className="PostContent_Search"
            placeholder="Bạn đang nghĩ gì?"
          />
        </form>
      </div>
      <div className="PostContent_bottom">
        <div className="PostContent_option">
          <RiLiveLine style={{ color: "red" }} />
          <h3>Video trực tiếp</h3>
        </div>
        <div className="PostContent_option">
          <BiImage style={{ color: "green" }} />
          <h3>Ảnh/Video</h3>
        </div>
        <div className="PostContent_option">
          <MdInsertEmoticon style={{ color: "yellow" }} />
          <h3>Cảm xúc/Hoạt động</h3>
        </div>
      </div>
    </div>
  );
}

export default PostContent;
