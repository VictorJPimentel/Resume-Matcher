import React, { useState, useEffect, useRef } from "react";

function Candidates() {
  return (
    <div
      className="flex flex-col z-40 left-0 top-0 h-full no-scrollbar w-1/5 border-r border-slate-200 
      "
    >
      <div className="border-b border-1 text-xl leading-tight font-medium mb-2 p-10 text-center">
        {" "}
        Candidates
      </div>
      <div class="flex">
        <div class="block p-6 bg-white border-b w-full">
          <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
            John Smith
          </h5>
          <p class="text-gray-700 text-base mb-4"></p>
          <p class="text-gray-700 text-base mb-4">s</p>
        </div>
      </div>
    </div>
  );
}

export default Candidates;
