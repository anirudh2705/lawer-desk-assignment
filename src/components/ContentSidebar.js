import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import datas from "../DummyData";
import { AiOutlineFilePdf } from "react-icons/ai";

const ContentSidebar = () => {
  return (
    <aside className=" bg-white md:min-h-[600px] p-4 md:max-w-xs shadow rounded-lg ">
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
        <h2 className="font-medium">Text Entered</h2>
        <p className="pl-3 text-sm text-gray-500">
          I'm researching environmental regulations. Can you summarize the Clean
          Air Act and its objectives with details.
        </p>
      </div>
      <hr className="text-gray-500" />
      <div className="pt-4">
        <h2 className="font-medium pb-2">Uploads</h2>
        <div className="mb-2 p-2 bg-gradient-to-r from-blue-100 to-violet-200 rounded-lg flex flex-col gap-2 ">
          <h2 className="font-medium">
            Uploaded file
            <span className="ml-2 px-3  bg-blue-200 text-blue-600 text-sm font-bold rounded-md">
              {datas.length}/5
            </span>
          </h2>
          <ul>
            {datas.map((data, index) => (
              <li
                key={index}
                className="mb-2 p-2 rounded-lg bg-gray-100 flex items-center gap-1"
              >
                <AiOutlineFilePdf className=" text-red-500" />
                <span className="text-gray-900 font-semibold text-sm">
                  {data.file}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default ContentSidebar;
