import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
function HomePage() {
  const [recentStudies, setRecentStudies] = useState([
    {
      title: '"Dog Bite Complaint"',
      status: "Completed",
      updated: "2 days ago",
    },
    {
      title: '"The Cyberbullying Conspiracy"',
      status: "Completed",
      updated: "2 days ago",
    },
    {
      title: '"The Data Breach Dilemma"',
      status: "Completed",
      updated: "2 days ago",
    },
    {
      title: '"The Data Breach Dilemma"',
      status: "In progress",
      updated: "2 days ago",
    },
    {
      title: '"The Data Breach Dilemma"',
      status: "Failed",
      updated: "2 days ago",
    },
  ]);

  return (
    <div className="font-inter h-full min-h-screen flex flex-col items-center">
      <Header/>
      <main className="w-full max-w-5xl my-8 mb-5 flex flex-col gap-3 md:flex-row px-4">
        <Sidebar recentStudies={recentStudies} />
        <Main />
      </main>
    </div>
  );
}



export default HomePage;
