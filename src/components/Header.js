import React, { useState } from 'react';
import { FaRegNewspaper, FaHandshakeSimple } from "react-icons/fa6";
import { MdOutlinePeople } from "react-icons/md";
import { RiHome6Line } from "react-icons/ri";
import { BsChatSquareText } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const handleClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <header className="w-full bg-gray-200 shadow p-6 flex justify-between items-center cursor-default">
      <h1 className="text-2xl text-[#025BD4]">ADVOCATE</h1>
      <div className="hidden lg:flex items-center lg:gap-10">
        <div
          className={`flex gap-3 items-center ${activeTab === 'NewsFeed' ? 'bg-gradient-to-r from-blue-500 to-blue-900 text-white py-2 px-4 rounded-full' : ''}`}
          onClick={() => handleClick('NewsFeed')}
        >
          <FaRegNewspaper/>
          News feed
        </div>
        <div
          className={`flex gap-3 items-center ${activeTab === 'FindLawyers' ? 'bg-gradient-to-r from-blue-500 to-blue-900 text-white  py-2 px-4 rounded-full' : ''}`}
          onClick={() => handleClick('FindLawyers')}
        >
          <MdOutlinePeople/>
          Find lawyers
        </div>
        <div
          className={`flex gap-3 items-center ${activeTab === 'Home' ? 'bg-gradient-to-r from-blue-500 to-blue-900 text-white py-2 px-4 rounded-full' : ''}`}
          onClick={() => handleClick('Home')}
        >
          <RiHome6Line/>
          Home
        </div>
        <div
          className={`flex gap-3 items-center ${activeTab === 'Connections' ? 'bg-gradient-to-r from-blue-500 to-blue-900 text-white  py-2 px-4 rounded-full' : ''}`}
          onClick={() => handleClick('Connections')}
        >
          <FaHandshakeSimple/>
          Connections
        </div>
        <div
          className={`pl-8 flex gap-3 items-center cursor-pointer`}
        
        >
          <BsChatSquareText/>
          Chats
        </div>
      </div>
      <div className='hidden md:flex md:gap-7 text-xl pr-6 '>
        <a><IoSettingsOutline /></a>
        <a><IoIosNotificationsOutline/></a>
        <a><CgProfile/></a>
      </div>
    </header>
  );
};

export default Header;
