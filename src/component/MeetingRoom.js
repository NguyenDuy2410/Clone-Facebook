import React from "react";
import "./MeetingRoom.css";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { GrFormNext } from "react-icons/gr";

function MeetingRoom() {
    return (
        <div className="MeetingRoom">
            <div className="MeetingRoom_RoomLive">
                <div className="MeetingRoom_Live">
                    <AiOutlineVideoCameraAdd />
                    <button>Tạo phòng họp mặt</button>
                </div>
            </div>
            <div className="Avatar">
                <div className="Avatar_Live">
                    <img src="./image/girl1.jpg" alt="" />
                    <div className="circle"></div>
                </div>

                <div className="Avatar_Live">
                    <img src="./image/girl2.jpg" alt="" />
                    <div className="circle"></div>
                </div>
                <div className="Avatar_Live">
                    <img src="./image/girl3.jpg" alt="" />
                    <div className="circle"></div>
                </div>
                <div className="Avatar_Live">
                    <img src="./image/girl4.jpg" alt="" />
                    <div className="circle"></div>
                </div>
                <div className="Avatar_Live">
                    <img src="./image/girl8.jpg" alt="" />
                    <div className="circle"></div>
                </div>
                <div className="Avatar_Live">
                    <img src="./image/girl6.jpg" alt="" />
                    <div className="circle"></div>
                </div>
            </div>
            <div className="Next">
                <GrFormNext />
            </div>
        </div>
    );
}

export default MeetingRoom;
