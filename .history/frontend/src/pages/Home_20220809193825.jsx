import React, { useState } from "react";

// import Sidebar from "../partials/Sidebar";
import Header from "../components/Header";
import Filter from "../components/Filters";
// import WelcomeBanner from "../partials/dashboard/WelcomeBanner";

function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header />

        <main className="flex">
          <Filter />
        </main>
      </div>
    </div>
  );
}

export default Home;
