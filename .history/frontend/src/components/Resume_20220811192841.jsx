import React, { useState, useEffect, useRef } from "react";

function Resume({ showResume }) {
  return (
    <div
      className="flex flex-col z-40 left-0 top-0 justify-center items-center text-xl h-full no-scrollbar w-full border-r border-slate-200
      text-center "
    >
      {showResume}
    </div>
  );
}

export default Resume;
