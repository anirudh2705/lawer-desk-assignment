import React, { useState } from "react";

const ContentMain = () => {
  const [tab, setTab] = useState("Questions");
  const [questionType, setQuestionType] = useState("Petitioner");

  const dummy = [
    {
      question: "If you could invent any superpower, what would it be and why?",
      reason:
        "Praesent elementum turpis nisi, ut hendrerit erat sodales et. Nunc sed erat et diam vulputate molestie. Praesent ac arcu semper, sollicitudin ante id, efficitur lectus. Donec placerat ligula a dolor scelerisque ultrices. ",
    },
    {
      question:
        "What do you think these stories tell us about the values and beliefs of the societies that created them?",
      reason: "Praesent eigula a dolor scelerisque ultrices. ",
    },
    {
      question:
        "Imagine a world where technology allows us to travel instantly to any point on Earth. What would be the benefits and drawbacks of such a world?",
      reason:
        "Praesent elementuPraesent ac arcu semper, sollicitudin ante id, efficitur lectus. Donec placerat ligula a dolor scelerisque ultrices. ",
    },
    {
      question:
        "With the increasing popularity of online learning, do you think traditional classrooms will become obsolete? Why or why not?",
      reason:
        "Praesent elementum turpis nisi, ut hendrerit erat sodales et. Nunc sed erat et diam vulputate molessemper, sollicitudin ante id, efficitur lectus. Donec placerat ligula a dolor scelerisque ultrices. ",
    },
    {
      question:
        "If animals could talk, which species do you think would be the most interesting to converse with, and why?",
      reason:
        "Praisi, ut hendrerit erat sodales et. Nunc sed erat et diam vulputate molestie. Praesent ac arcu semper, sollicitudin ante id, efficitur lectus. D a dolor scelerisque ultrices. ",
    },
  ];

  return (
    <div className="md:w-11/12 p-4 lg:mt-6 bg-white rounded-lg  relative ">
      <div className="lg:flex mb-4 text-xs top-[-25px] left-0  absolute hidden">
        <a
          onClick={() => setTab("Case Desc")}
          className={`px-5 py-2 shadow-inner rounded-t-xl ${
            tab === "Case Desc" ? "bg-main text-white" : "bg-white text-black"
          }`}
        >
          Case Desc
        </a>
        <a
          onClick={() => setTab("Acts & Laws")}
          className={`px-5 py-2 rounded-t-xl ${
            tab === "Acts & Laws" ? "bg-main text-white" : "bg-white text-black"
          }`}
        >
          Acts & Laws
        </a>
        <a
          onClick={() => setTab("Judgement")}
          className={`px-7 py-2 rounded-t-xl ${
            tab === "Judgement" ? "bg-main text-white" : "bg-white text-black"
          }`}
        >
          Judgement
        </a>
        <a
          onClick={() => setTab("Templates")}
          className={`px-7 py-2 rounded-t-xl ${
            tab === "Templates" ? "bg-main text-white" : "bg-white text-black"
          }`}
        >
          Templates
        </a>
        <a
          onClick={() => setTab("Questions")}
          className={`px-7 py-2 rounded-t-xl ${
            tab === "Questions" ? "bg-main text-white" : "bg-white text-black"
          }`}
        >
          Questions
        </a>
        <a
          onClick={() => setTab("Support")}
          className={`px-7 py-2 rounded-t-xl ${
            tab === "Support" ? "bg-main text-white" : "bg-white text-black"
          }`}
        >
          Support
        </a>
      </div>
      {tab === "Questions" && (
        <div>
          <h2 className="font-bold pb-3">Questions</h2>
          <div className="flex gap-4 mb-4">
            <button
              onClick={() => setQuestionType("Petitioner")}
              className={`px-4 py-2 rounded-full ${
                questionType === "Petitioner"
                  ? "bg-gradient-to-r from-blue-500 to-blue-900  text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              By Petitioner
            </button>
            <button
              onClick={() => setQuestionType("Respondent")}
              className={`px-4 py-2 rounded-full ${
                questionType === "Respondent"
                  ? "bg-gradient-to-r from-blue-500 to-blue-900 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              By Respondent
            </button>
          </div>
          <div>
            {dummy.map((data, i) => (
              <div key={i} className="mb-4">
                <p className="font-bold">
                  {i + 1}. {data.question}
                </p>
                <p className="flex font-bold flex-col">Reason- <span className="font-thin">{data.reason}</span></p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentMain;
