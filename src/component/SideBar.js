import React from "react";
import SideBarRow from "./SideBarRow";
import "./SideBar.css";
import {
  BsPeopleFill,
  BsCalendarEvent,
  BsMessenger,
  BsFillStarFill,
} from "react-icons/bs";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { GoClock } from "react-icons/go";
import { HiSaveAs } from "react-icons/hi";
import { TbNews } from "react-icons/tb";
import { RiPaypalFill } from "react-icons/ri";
import { MdOutlineLiveTv, MdExpandLess } from "react-icons/md";
import { IoIosPeople, IoLogoGameControllerB } from "react-icons/io";

function SideBar() {
  return (
    <div className="SideBar">
      <SideBarRow img src="avatar.jpg" alt="" title="Lâm Duy" />
      <SideBarRow Icon={BsPeopleFill} title="Bạn Bè" />
      <SideBarRow Icon={IoIosPeople} title="Nhóm" />
      <SideBarRow Icon={SiHomeassistantcommunitystore} title="MarketPlace" />
      <SideBarRow Icon={GoClock} title="Kỷ Niệm" />
      <SideBarRow Icon={HiSaveAs} title="Đã Lưu" />
      <SideBarRow Icon={TbNews} title="Trang" />
      <SideBarRow Icon={BsCalendarEvent} title="Sự Kiện" />
      <SideBarRow Icon={IoLogoGameControllerB} title="Chơi Game" />
      <SideBarRow Icon={RiPaypalFill} title="PayPal" />
      <SideBarRow Icon={BsMessenger} title="Messenger" />
      <SideBarRow Icon={BsFillStarFill} title="Yêu Thích" />
      <SideBarRow Icon={MdOutlineLiveTv} title="Video" />
      <SideBarRow Icon={MdExpandLess} title="Ẩn Bớt" />
    </div>
  );
}

export default SideBar;
