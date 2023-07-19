import Image from "next/image";
import React from "react";
import LeftHeader from "@/components/LeftHeader";
import * as Icons from "../assets/img";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="w-60">
        <LeftHeader />
      </div>
      <div className="flex w-[732px]">
        <div className="flex w-[484px]">
          <input type="text" placeholder="Tìm kiếm" />
          <Image src={Icons.KeyBoard} height={24} width={24} alt="" />
          <Image src={Icons.SearchIcon} height={24} width={24} alt="" />
        </div>
        <div>
          <Icons.Mic />
        </div>
      </div>
      <div className="flex">
        <Image src={Icons.UploadIcon} height={24} width={24} alt="" />
        <Image src={Icons.NotificationIcon} height={24} width={24} alt="" />
        <img className="rounded-full" src='https://avatars.githubusercontent.com/u/550141?s=36' alt="" />
      </div>
    </div>
  );
};

export default Header;
