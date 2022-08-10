import React, { useState } from "react";

// import Sidebar from "../partials/Sidebar";
import Header from "../components/Header";
import Filter from "../components/Filters";
// import WelcomeBanner from "../partials/dashboard/WelcomeBanner";

function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <Filter />
            {/* Welcome banner */}
            {/* <WelcomeBanner /> */}

            {/* Line chart (Acme Plus) */}

            {/* Card (Customers) */}
            {/* <DashboardCard10 /> */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
