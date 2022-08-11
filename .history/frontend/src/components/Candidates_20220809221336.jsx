import React, { useState, useEffect, useRef } from "react";

function Candidates() {
  return (
    <div
      className="flex flex-col z-40 left-0 top-0 h-full no-scrollbar w-1/5 border-r border-slate-200 
      "
    >
      <div className="border-b text-xl leading-tight font-medium p-10 text-center">
        Candidates
      </div>
      <div class="flex border-b bg-white-100 hover:bg-gray-300">
        <div class="block p-6">
          <h5 class="text-gray-900 text-xl leading-tight font-medium">
            John Smith
          </h5>
          <p class="text-gray-700 text-base mb-4">Now</p>
          <p class="text-gray-700 text-base mb-4">Before</p>
        </div>
      </div>
      <div class="flex  bg-white border-b">
        <div class="block p-6">
          <h5 class="text-gray-900 text-xl leading-tight font-medium">
            John Smith
          </h5>
          <p class="text-gray-700 text-base mb-4">Now</p>
          <p class="text-gray-700 text-base mb-4">Before</p>
        </div>
      </div>
    </div>
  );
}

export default Candidates;
