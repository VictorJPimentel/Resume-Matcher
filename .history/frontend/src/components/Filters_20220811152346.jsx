import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
// import MultiRangeSlider from "multi-range-slider-react";
import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider";
import { WithContext as ReactTags } from "react-tag-input";
import TagsInput from "./multiRangeSlider/TagsInput";
import DiscoutRange from "./discount-range";

function Filter() {
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(10);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  return (
    <div
      className="flex flex-col z-40 gap-y-10 left-0 top-0 h-full no-scrollbar w-3/6 border-r border-slate-200 
     p-12"
    >
      <div class="">
        <h5 class="text-gray-900 text-xl leading-tight font-medium ">
          Keyboards
        </h5>
        <div>
          <TagsInput />
        </div>
      </div>

      <h5 class="text-gray-900 text-xl leading-tight font-medium ">
        Years of Experience{" "}
      </h5>
      <DiscoutRange
        name={this.state.name}
        MIN={20}
        range={[39, 45, 59, 70]}
        MAX={75}
      />
      <MultiRangeSlider
        min={0}
        max={10}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
      <h5 class="text-gray-900 text-xl leading-tight font-medium ">
        {" "}
        Minimum Degree{" "}
      </h5>
      <div class="flex justify-center">
        <select
          class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Select Degree"
        >
          <option>Degree</option>
          <option selected value="1">
            Associates
          </option>
          <option value="2">Bachelors</option>
          <option value="3">Master</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
