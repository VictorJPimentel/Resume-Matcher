import React, { useState, useEffect, useRef } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const candidatesinfo = [
  {
    name: "Alex Shatov",
    education: ["Bachelor of Engineering in Computer Science", 2018],
    experience: ["Software Engineer at Some Technologies", 2019],
  },
  {
    name: "Pedro Shatova",
    education: ["Bachelor of Engineering in Computer Science", 2018],
    experience: ["Software Engineer at Some Technologies", 2019],
  },
  {
    name: "Mars Rodriguez",
    education: ["Bachelor of Engineering in Computer Science", 2018],
    experience: ["Software Engineer at Some Technologies", 2019],
  },
  {
    name: "Jose Nieto",
    education: ["Bachelor of Engineering in Computer Science", 2018],
    experience: ["Software Engineer at Some Technologies", 2019],
  },
  {
    name: "Angel Alvarez",
    education: ["Bachelor of Engineering in Computer Science", 2018],
    experience: ["Software Engineer at Some Technologies", 2019],
  },
];

function Candidates({ setCandidate }) {
  const [resume, setResume] = useState("");

  return (
    <div
      className="flex flex-col z-40 left-0 top-0 h-full no-scrollbar w-2/5 border-r border-slate-200 
      "
    >
      <div className="border-b text-2xl bold leading-tight font-medium p-10 text-center">
        Candidates
      </div>
      <div className="h-full">
        {candidatesinfo.map((candidate) => {
          return (
            <button
              class="flex border-b bg-white-100 focus:bg-gray-300 w-full"
              onClick={() => setCandidate(candidate.name)}
            >
              <div class="block p-6">
                <h5 class="text-gray-900 text-xl leading-tight font-medium">
                  {candidate.name}
                </h5>
                <div class="flex space-x-2 items-center px-3 py-2 text-gray-700 text-base">
                  <FaBriefcase />
                  <span>
                    {candidate.education[0]} - {candidate.education[1]}
                  </span>
                </div>
                <div class="flex space-x-2 items-center px-3 py-2 text-gray-700 text-base">
                  <FaGraduationCap />
                  <span>
                    {candidate.experience[0]} - {candidate.experience[1]}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
        {resume}
      </div>
    </div>
  );
}

export default Candidates;
