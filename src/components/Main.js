import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  AiOutlineUpload,
  AiOutlineFilePdf,
  AiOutlineFile,
  AiOutlineFileWord,
  AiOutlineFileImage,
} from "react-icons/ai";
import { LiaNewspaperSolid } from "react-icons/lia";
import { Link } from "react-router-dom";


const Main = ({ onFileUpload }) => {
  const [files, setFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    const newFiles = acceptedFiles.map((file) => ({
      file,
      icon: getFileIcon(file),
    }));
    setFiles([...files, ...newFiles]);
    onFileUpload(newFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const getFileIcon = (file) => {
    const fileType = file.type;
    if (fileType.includes("pdf"))
      return <AiOutlineFilePdf className="text-red-500" />;
    if (fileType.includes("word"))
      return <AiOutlineFileWord className="text-blue-500" />;
    if (fileType.includes("image"))
      return <AiOutlineFileImage className="text-yellow-500" />;
    return <AiOutlineFile className="text-gray-500" />;
  };

  return (
    <section className=" w-fit flex-1 px-4 pt-4 pb-16 md:p-4 bg-white shadow rounded-lg relative">
      <h2 className="text-l mb-4 flex gap-1 items-center ">
        <LiaNewspaperSolid className="hidden lg:block" />

        Get Complete info about any case from AI-driven research assistance
      </h2>
      <input
        type="text"
        placeholder="Ex: Land dispute, Mumbai, recent judgments."
        className="w-full p-2 mb-4 border rounded"
      />
      <div
        {...getRootProps({
          className:
            "flex items-center justify-center border-dashed border-2 border-gray-300 p-6 mb-4 rounded cursor-pointer",
        })}
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <input {...getInputProps()} />
            <AiOutlineUpload className="text-3xl text-gray-500" />
            <span className="md:ml-2 text-gray-500 text-sm md:text-xl">
              Drag and drop here or click here to 
              <span className="text-blue-600 underline ml-1">
              Upload a file
              </span>
            </span>
          </div>

          <div className="flex flex-col items-center justify-center mb-4">
            <span>Maximum uploads: 1</span>
            <span className=" text-gray-500">
              File formats: JPG, PNG, Docx, Pdf etc.
            </span>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="mb-2">Uploaded files <span className="ml-2 px-3  bg-blue-300 text-blue-800 text-sm rounded-md">{files.length}/5</span></h3>
        <ul>
          {files.map((fileWrapper, index) => (
            <li
              key={index}
              className="flex items-center mb-2 p-2 bg-gray-100 rounded"
            >
              {fileWrapper.icon}
              <div className="ml-2">{fileWrapper.file.name}</div>
            </li>
          ))}
        </ul>
      </div>
        <Link to={'/main'}
          className="w-1/4 text-center bg-gradient-to-r from-blue-500 to-blue-900 text-white rounded-full p-2 absolute bottom-7 right-7 "
        >
          Start
        </Link>
    </section>
  );
};

export default Main;
