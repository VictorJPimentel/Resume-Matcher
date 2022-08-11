import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
// import MultiRangeSlider from "multi-range-slider-react";
import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider";
import { WithContext as ReactTags } from "react-tag-input";
import TagsInput from "./multiRangeSlider/TagsInput";

function Filter() {
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(10);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const [tags, setTags] = React.useState([
    { id: "Thailand", text: "Thailand" },
    { id: "India", text: "India" },
    { id: "Vietnam", text: "Vietnam" },
    { id: "Turkey", text: "Turkey" },
  ]);

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = (index) => {
    console.log("The tag at index " + index + " was clicked");
  };

  return (
    <div
      className="flex flex-col z-40 left-0 top-0 h-full no-scrollbar w-2/5 border-r border-slate-200 
      text-center"
    >
      <div>Filters </div>
      <div>Keyboards </div>
      <TagsInput />
      <div> Years of Experience</div>
      <MultiRangeSlider
        min={0}
        max={10}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
      <div> Minimum Degree</div>
    </div>
  );
}

export default Filter;
