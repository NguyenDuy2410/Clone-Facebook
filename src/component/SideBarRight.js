import React from "react";
import SideBarRightRow from "./SideBarRightRow";
import "./SideBarRight.css";

function SideBarRight() {
    return (
        <div className="SideBarRights">
            <p>Người liên hệ</p>
            <div className="SideBarRight">
                <SideBarRightRow
                    className="avatar"
                    avatar="avatar.jpg"
                    username="Lâm Duy"
                />
                <SideBarRightRow
                    className="avatar"
                    avatar="./image/girl.jpg"
                    username="Lâm Duy"
                />
                <SideBarRightRow
                    className="avatar"
                    avatar="./image/girl1.jpg"
                    username="Lâm Duy"
                />
                <SideBarRightRow
                    className="avatar"
                    avatar="./image/girl2.jpg"
                    username="Lâm Duy"
                />
                <SideBarRightRow
                    className="avatar"
                    avatar="./image/girl3.jpg"
                    username="Lâm Duy"
                />
                <SideBarRightRow
                    className="avatar"
                    avatar="./image/girl4.jpg"
                    username="Lâm Duy"
                />
                <SideBarRightRow
                    className="avatar"
                    avatar="./image/girl6.jpg"
                    username="Lâm Duy"
                />
                <SideBarRightRow
                    className="avatar"
                    avatar="./image/girl4.jpg"
                    username="Lâm Duy"
                />
                <SideBarRightRow
                    className="avatar"
                    avatar="./image/girl8.jpg"
                    username="Lâm Duy"
                />
            </div>
        </div>
    );
}

export default SideBarRight;
