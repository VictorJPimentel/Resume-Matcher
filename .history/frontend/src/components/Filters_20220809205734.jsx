import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import MultiRangeSlider from "multi-range-slider-react";

function Filter() {
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  return (
    <div
      className="flex flex-col z-40 left-0 top-0 h-full no-scrollbar w-2/5 border-r border-slate-200 
      text-center "
    >
      Filters
      <MultiRangeSlider
        min={0}
        max={100}
        step={5}
        ruler={true}
        label={true}
        preventWheel={false}
        minValue={minValue}
        maxValue={maxValue}
        onInput={(e) => {
          handleInput(e);
        }}
      />
    </div>
  );
}

export default Filter;
