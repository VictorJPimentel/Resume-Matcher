import React, { useState } from "react";

function Header() {
  return (
    <header className="top-0 bg-white border-b border-slate-200 z-30 w-full h-16">
      <div className="px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16 -mb-px text-center content-center">
          Header
        </div>
      </div>
    </header>
  );
}

export default Header;
