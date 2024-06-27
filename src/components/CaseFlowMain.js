import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

function CaseFlowMain() {
  return (
    <section className=" min-w-fit flex-1 px-4 pt-4 pb-16 md:p-4 bg-white shadow rounded-lg relative">
      <h2 className="text-xl  flex gap-1 items-center">Case Flow</h2>
      <h3 className=" text-blue-500 font-bold">
        Select the document for drafting
      </h3>

      <div className="relative">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <FaCircle className="text-blue-500"/>
          <p>Pre Litigation</p>
        </div>

        <div className=" h-36 border-l-2 border-gray-400 ml-1.5 absolute" />
        <div className="mt-2">
          <div className="mb-2 ml-6 p-2 rounded-lg border-gray-300 border-2 flex flex-col gap-1 pr-7">
            <div className="flex items-center gap-2 font-semibold ">
              <IoDocumentTextOutline />
              <p>Legal Notice</p>
            </div>
            <p className="pl-6 text-sm text-gray-500">
              Notifies the opposite party of the dispute and demand resolution
            </p>
          </div>
          <div className="mb-2 ml-6 p-2 rounded-lg border-gray-300 border-2 flex flex-col gap-1">
          <div className="flex items-center gap-2 font-semibold">
              <IoDocumentTextOutline />
              <p>Reply to Legal Notice</p>
            </div>
            <p className="pl-6 text-sm text-gray-500">
              A reply to Reply to Legal Notice and demand resolution
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <FaCircle className="text-blue-500" />
          <p>Litigation</p>
        </div>

        <div className=" h-72 border-l-2 border-gray-400 ml-1.5 absolute" />
        <div className="mt-2">
          <div className="mb-2 ml-6 p-2 rounded-lg border-gray-300 border-2 flex flex-col gap-1">
            <div className="flex items-center gap-2 font-semibold">
              <IoDocumentTextOutline />
              <p>Legal Notice</p>
            </div>
            <p className="pl-6 text-sm text-gray-500">
              Notifies the opposite party of the dispute and demand resolution
            </p>
          </div>
          <div className="mb-2 ml-6 p-2 rounded-lg border-gray-300 border-2 flex flex-col gap-1">
            <div className="flex items-center gap-2 font-semibold ">
              <IoDocumentTextOutline />
              <p>Reply to Legal Notice</p>
            </div>
            <p className="pl-6 text-sm text-gray-500">
              A reply to Reply to Legal Notice and demand resolution
            </p>
          </div>
          <div className="mb-2 ml-6 p-2 rounded-lg border-gray-300 border-2 flex flex-col gap-1">
            <div className="flex items-center gap-2 font-semibold ">
              <IoDocumentTextOutline />
              <p>Reply to Legal Notice</p>
            </div>
            <p className="pl-6 text-sm text-gray-500">
              A reply to Reply to Legal Notice and demand resolution
            </p>
          </div>
          <div className="mb-2 ml-6 p-2 rounded-lg border-gray-300 border-2 flex flex-col gap-1">
            <div className="flex items-center gap-2 font-semibold ">
              <IoDocumentTextOutline />
              <p>Reply to Legal Notice</p>
            </div>
            <p className="pl-6 text-sm text-gray-500">
              A reply to Reply to Legal Notice and demand resolution
            </p>
          </div>
        </div>


</div>

        <div className="relative">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <FaCircle className="text-blue-500" />
          <p>Litigation</p>
        </div>

        {/* <div className=" h-80 border-l-2 border-gray-400 ml-1.5 absolute" /> */}
        <div className="mt-2">
          <div className="mb-2 ml-6 p-2 rounded-lg border-gray-300 border-2 flex flex-col gap-1">
            <div className="flex items-center gap-2 font-semibold">
              <IoDocumentTextOutline />
              <p>Legal Notice</p>
            </div>
            <p className="pl-6 text-sm text-gray-500">
              Notifies the opposite party of the dispute and demand resolution
            </p>
          </div>
          <div className="mb-2 ml-6 p-2 rounded-lg border-gray-300 border-2 flex flex-col gap-1">
            <div className="flex items-center gap-2 font-semibold ">
              <IoDocumentTextOutline />
              <p>Reply to Legal Notice</p>
            </div>
            <p className="pl-6 text-sm text-gray-500">
              A reply to Reply to Legal Notice and demand resolution
            </p>
          </div>
          <div className="mb-2 ml-6 p-2 rounded-lg border-gray-300 border-2 flex flex-col gap-1">
            <div className="flex items-center gap-2 font-semibold ">
              <IoDocumentTextOutline />
              <p>Reply to Legal Notice</p>
            </div>
            <p className="pl-6 text-sm text-gray-500">
              A reply to Reply to Legal Notice and demand resolution
            </p>
          </div>
          <div className="mb-2 ml-6 p-2 rounded-lg border-gray-300 border-2 flex flex-col gap-1">
            <div className="flex items-center gap-2 font-semibold ">
              <IoDocumentTextOutline />
              <p>Reply to Legal Notice</p>
            </div>
            <p className="pl-6 text-sm text-gray-500">
              A reply to Reply to Legal Notice and demand resolution
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default CaseFlowMain;
