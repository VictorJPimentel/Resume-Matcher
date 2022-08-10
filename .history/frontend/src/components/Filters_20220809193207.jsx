import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Filter() {
  return (
    <div>
      {/* Sidebar */}
      <div
        id="sidebar"
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800  
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          {/* Logo */}
        </div>
      </div>
    </div>
  );
}

export default Filter;
