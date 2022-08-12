import React, { useState, useEffect, useRef } from "react";

const candidatesinfo = [
  {
    name: "Alex Shatov",
    education: [
      "Bachelor of Engineering in Computer Science at UNSW  -  2018",
      2018,
    ],
    experience: ["Software Engineer at Some Technologies", 2019],
  },
  {
    name: "Alex Shatov",
    education: [
      "Bachelor of Engineering in Computer Science at UNSW  -  2018",
      2018,
    ],
    experience: ["Software Engineer at Some Technologies", 2019],
  },
  {
    name: "Alex Shatov",
    education: [
      "Bachelor of Engineering in Computer Science at UNSW  -  2018",
      2018,
    ],
    experience: ["Software Engineer at Some Technologies", 2019],
  },
  {
    name: "Alex Shatov",
    education: [
      "Bachelor of Engineering in Computer Science at UNSW  -  2018",
      2018,
    ],
    experience: ["Software Engineer at Some Technologies", 2019],
  },
];

function Candidates() {
  return (
    <div
      className="flex flex-col z-40 left-0 top-0 h-full no-scrollbar w-2/5 border-r border-slate-200 
      "
    >
      <div className="border-b text-xl leading-tight font-medium p-10 text-center">
        Candidates
      </div>
      <div className="h-full">
        {candidatesinfo.map((candidate) => {
          return (
            <div class="flex border-b bg-white-100 hover:bg-gray-300">
              <div class="block p-6">
                <h5 class="text-gray-900 text-xl leading-tight font-medium">
                  {candidate.name}
                </h5>
                <div class="flex space-x-2 items-center px-3 py-2drop-shadow-md text-gray-700 text-base mb-4">
                  <svg
                    class="fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
                  </svg>
                  <span class="text-white">
                    {" "}
                    {candidate.education[0]} - {candidate.education[1]}
                  </span>
                </div>
                {candidate.education[0]} - {candidate.education[1]}
                <p class="text-gray-700 text-base mb-4">
                  {candidate.experience[0]} - {candidate.experience[1]}
                </p>
              </div>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
}

export default Candidates;
