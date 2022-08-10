import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Filter() {
  return (
    <>
      {/* Sidebar */}
      <div
        id="sidebar"
        className="flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform
         h-max overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 border-r border-slate-200 
       "
      ></div>
    </>
  );
}

export default Filter;
