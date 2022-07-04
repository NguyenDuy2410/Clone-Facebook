import React from "react";
import Story from "./Story";
import PostContent from "./PostContent";
import "./Content.css";
import MeetingRoom from "./MeetingRoom";
import Post from "./Post";

function Content() {
    return (
        <div className="Content">
            <Story />
            <PostContent />
            <MeetingRoom />
            <Post
                avatar="avatar.jpg"
                massage="Hello"
                time="2h"
                icon="IoEarth"
                username="Lâm Duy"
                image="avatar.jpg"
            />
            <Post
                avatar=".\image\girl.jpg"
                massage="Hello"
                time="2h"
                icon="IoEarth"
                username="Lâm Duy"
                image=".\image\girl.jpg"
            />
            <Post
                avatar=".\image\girl1.jpg"
                massage="Hello"
                time="2h"
                icon="IoEarth"
                username="Lâm Duy"
                image=".\image\girl.jpg"
            />
        </div>
    );
}

export default Content;
