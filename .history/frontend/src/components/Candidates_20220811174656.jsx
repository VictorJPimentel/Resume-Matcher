import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                <div class="flex space-x-2 items-center px-3 py-2 text-gray-700 text-base mb-4">
                  <FontAwesomeIcon icon="fa-solid fa-briefcase" />
                  <FontAwesomeIcon icon={["fab", "apple"]} />
                  <span>
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
