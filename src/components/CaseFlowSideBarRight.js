import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const CaseFlowSideBarRight = () => {
  return (
    <aside className=" md:min-h-[600px] md:min-w-60 py-4 pr-8 pl-4 bg-white shadow rounded-lg mb-4 md:mb-0 relative">
      <div className="flex flex-col text-sm font-bold">
        <p className="flex gap-2 items-center text-blue-500 ">
          
          <FaCheckCircle /> Start
        </p>
        <div className=" h-5 ml-1.5 border-l-2 border-blue-500" />
        <p className="flex gap-2 items-center text-blue-500 ">
          
          <FaCheckCircle /> Continue
        </p>
        <div className=" h-5 ml-1.5 border-l-2 border-blue-500" />
        <p className="flex gap-2 items-center text-blue-500">
          
          <FaCheckCircle /> Analysis
        </p>
        <div className=" h-5 ml-1.5 border-l-2 border-blue-500" />
        <p className="flex gap-2 items-center text-gray-300  ">
          
          <FaCheckCircle /> Aditional Documents
        </p>
        <div className=" h-5 ml-1.5 border-l-2 border-gray-300" />
        <p className="flex gap-2 items-center text-gray-300 ">
          
          <FaCheckCircle /> Relief
        </p>
        <div className=" h-5 ml-1.5 border-l-2 border-gray-300" />
        <p className="flex gap-2 items-center text-gray-300 ">
          
          <FaCheckCircle /> Suggestions
        </p>
        <div className=" h-5 ml-1.5 border-l-2 border-gray-300" />
        <p className="flex gap-2 items-center text-gray-300 ">
          
          <FaCheckCircle /> First Draft
        </p>
        <div className=" h-5 ml-1.5 border-l-2 border-gray-300" />
        <p className="flex gap-2 items-center text-gray-300 ">
          
          <FaCheckCircle /> Q&A
        </p>
        <div className=" h-5 ml-1.5 border-l-2 border-gray-300" />
        <p className="flex gap-2 items-center text-gray-300">
          
          <FaCheckCircle /> Final Draft
        </p>
      </div>
      <button
          className=" w-48 bg-blue-600 text-white rounded-full p-2 mt-4 md:absolute bottom-5 right-6 "
        >
          Continue
        </button>
    </aside>
  );
};

export default CaseFlowSideBarRight;
