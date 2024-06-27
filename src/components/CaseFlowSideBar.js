import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import datas from '../DummyData'

const CaseFlowSideBar = () => {

  const getStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return <IoCheckmarkDoneCircleOutline className="text-green-500" />;
      case "In progress":
        return <FaRegClock className="text-yellow-600" />;
      case "Failed":
        return <IoMdCloseCircleOutline className="text-red-600" />;
      default:
        return null; 
    }
  };
    
  return (
    <aside className=" bg-white md:min-h-[600px] p-4 md:min-w-80 shadow rounded-lg ">
      <div className="flex justify-between items-center mb-6">
        <Link className="bg-gray-300 rounded-full h-10 w-10 flex items-center justify-center pl-1">
          <MdArrowBackIos />
        </Link>
        <Link
          to="/"
          className="bg-blue-600 text-white rounded-lg py-2 px-16 cursor-pointer"
        >
          Back to home
        </Link>
      </div>
      <h2 className="pb-2 font-bold">Given information</h2>
      <hr className="text-gray-500" />
      <div className="py-3">
        <h2 className="font-medium">Your Search</h2>
        <p className="pl-3 text-sm text-gray-500">
          Habes Corpus
        </p>
      </div>
      
      <div >
        <h2 className="font-medium pb-2">Recents</h2>
        <ul>
        {datas.map((data, index) => (
          <li key={index} className="mb-2 p-2 rounded border-gray-300 border-2 flex flex-col gap-1">
            
            <div className="relative flex items-center">
            <span className="text-xs text-gray-400">{data.tag}</span>
              <span className={`absolute right-0 flex items-center gap-1 ${
               data.status === "Completed"
                 ? " text-green-500 bg-green-100 rounded-lg text-xs font-semibold px-2" 
                 : data.status === "In progress"
                 ? "bg-yellow-100 text-yellow-600 rounded-lg text-xs font-semibold px-2"
                 : "bg-red-100 text-red-600 rounded-lg text-xs font-semibold px-2"
             }`} >{getStatusIcon(data.status)}{data.status}</span>

            </div>
            <span className="text-blue-600 font-semibold text-sm">{data.title}</span>
            <span className="text-xs text-gray-400">{data.updated}</span>
          </li>
        ))}
      </ul>
        
      </div>
    </aside>
  );
};

export default CaseFlowSideBar;
