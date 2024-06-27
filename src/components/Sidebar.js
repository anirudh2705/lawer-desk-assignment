import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";

const Sidebar = ({ recentStudies }) => {
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
    <aside className="  md:min-h-[600px] p-4 bg-white shadow rounded-lg mb-4 md:mb-0">
      <h2 className="text-xl mb-4 font-semibold">Recent Studies</h2>
      <ul>
        {recentStudies.map((study, index) => (
          <li key={index} className="mb-2 p-2 rounded border-gray-300 border-2 flex flex-col gap-2">
            <span className="text-blue-600 font-semibold text-sm">{study.title}</span>
            <div className="relative flex items-center">
              <span className="text-xs text-gray-400">{study.updated}</span>
              <span className={`absolute right-0 flex items-center gap-1 ${
               study.status === "Completed"
                 ? " text-green-500 bg-green-100 rounded-lg text-xs font-semibold px-2" 
                 : study.status === "In progress"
                 ? "bg-yellow-100 text-yellow-600 rounded-lg text-xs font-semibold px-2"
                 : "bg-red-100 text-red-600 rounded-lg text-xs font-semibold px-2"
             }`} >{getStatusIcon(study.status)}{study.status}</span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
