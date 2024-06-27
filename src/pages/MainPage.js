import React from "react";
import Header from "../components/Header";

import Sidebar from "../components/ContentSidebar";
import Main from "../components/ContentMain";

function MainPage() {
  return (
    <div className="font-inter bg-blue-50 h-full min-h-screen flex flex-col items-center">
      <Header />
      <main className="w-full max-w-5xl my-8 mb-5 flex flex-col gap-3 md:flex-row px-4">
        <Sidebar />
        <Main />
      </main>
    </div>
  );
}

export default MainPage;
