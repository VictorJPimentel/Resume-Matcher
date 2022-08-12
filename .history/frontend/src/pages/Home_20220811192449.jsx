import React, { useState } from "react";

// import Sidebar from "../partials/Sidebar";
import Header from "../components/Header";
import Filter from "../components/Filters";
import Candidates from "../components/Candidates";
import Resume from "../components/Resume";
// import WelcomeBanner from "../partials/dashboard/WelcomeBanner";

function Home() {
  const [candidate, setCandidate] = useState("");
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header />

        <main className="flex h-screen">
          <Filter />
          <Candidates setCandidate={setCandidate} />
          <Resume showResume={candidate} />
        </main>
      </div>
    </div>
  );
}

export default Home;
