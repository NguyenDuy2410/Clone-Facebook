import React from "react";
import "./Header.css";
import { BsFacebook, BsSearch, BsPeople } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoLogoGameControllerB, IoIosPeople } from "react-icons/io";
import { MdNotifications } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { HiMenu } from "react-icons/hi";
function Header() {
    const [active, setActive] = React.useState("home");
    return (
        <div className="Header">
            <div className="header_left">
                <BsFacebook />
                <div className="header_input">
                    <div className="input_search">
                        <BsSearch />
                        <input
                            type="text"
                            placeholder="Tìm kiếm trên FaceBook"
                        />
                    </div>
                </div>
            </div>
            <div className="header_content">
                <AiFillHome
                    className={active === "home" ? "active" : ""}
                    onClick={() => setActive("home")}
                />
                <BsPeople
                    className={active === "friend" ? "active" : ""}
                    onClick={() => setActive("friend")}
                />
                <SiHomeassistantcommunitystore
                    className={active === "market" ? "active" : ""}
                    onClick={() => setActive("market")}
                />
                <IoIosPeople
                    className={active === "people" ? "active" : ""}
                    onClick={() => setActive("people")}
                />
                <IoLogoGameControllerB
                    className={active === "game" ? "active" : ""}
                    onClick={() => setActive("game")}
                />
            </div>
            <div className="header_right">
                <HiMenu />
                <TiMessages />
                <MdNotifications />
                <img src="avatar.jpg" alt="" className="header" />
            </div>
        </div>
    );
}

export default Header;
