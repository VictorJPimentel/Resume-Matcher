import React, { useState, useEffect, useRef } from "react";

function Candidates() {
  return (
    <div
      className="flex flex-col z-40 left-0 top-0 h-full no-scrollbar w-1/5 border-r border-slate-200 
      text-center"
    >
      <div className="border-b border-1 text-xl leading-tight font-large mb-2">
        {" "}
        Candidates
      </div>
      <div class="flex justify-center">
        <div class="block p-6 bg-white max-w-sm border-b">
          <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
            John Smith
          </h5>
          <p class="text-gray-700 text-base mb-4">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Candidates;
