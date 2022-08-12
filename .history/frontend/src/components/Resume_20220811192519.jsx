import React, { useState, useEffect, useRef } from "react";

function Resume({ candidate }) {
  return (
    <div
      className="flex flex-col z-40 left-0 top-0 h-full no-scrollbar w-full border-r border-slate-200
      text-center "
    >
      {candidate}
    </div>
  );
}

export default Resume;
