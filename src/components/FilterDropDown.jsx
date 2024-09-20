import { IoFilterOutline } from "react-icons/io5";
import { useNavigate } from "@tanstack/react-router";
import { useData } from "../provider/GlobalProvider";
import { useState, useRef } from "react";
const FilterDropDown = () => {
  const navigate = useNavigate();
  const { active, handleActive } = useData();
  const [dropDown, setDropDown] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  const optionsArr = ["all meals", "breakfast", "lunch", "dinner", "dessert"];

  const onFilter = (type) => {
    handleActive(type);
    navigate({
      to: "/",
      search: type === "all meals" ? {} : { type: type },
    });
    toggleDropDown();
  };

  const handleMouseLeave = (event) => {
    const { left, right, bottom } = dropdownRef.current.getBoundingClientRect();
    const { clientX, clientY } = event;

    if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
      setDropDown(false);
    }
  };

  const dropDownList = (
    <ul
      ref={dropdownRef}
      onMouseLeave={handleMouseLeave}
      className="border-[1px] animate-popUp opacity-0 bg-white border-darkBrown -translate-x-1/2 translate-y-[50px] absolute w-[150px] rounded-md list-none p-1 top-0 left-1/2 divide-y-[1px] divide-darkBrown/50"
    >
      {optionsArr.map((option, index) => (
        <li
          key={index}
          className={`${
            active === option ? "text-darkGold underline" : "text-darkBrown"
          } p-3 w-full underline-offset-2 capitalize decoration-1 text-left text-sm transition-all cursor-pointer hover:text-darkGold`}
          onClick={() => onFilter(option)}
        >
          {option}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="w-[150px] z-20  group cursor-pointer transition-all h-12  flex justify-center items-center relative ">
      <button
        onClick={toggleDropDown}
        className="flex size-full  group-hover:bg-darkBrown p-2 justify-between items-center border-[1px] rounded-md border-darkBrown"
      >
        <span className="text-md transition-all group-hover:text-white text-darkBrown inline-block">
          Filter by meals
        </span>
        <IoFilterOutline className="text-darkBrown transition-all text-md group-hover:text-white" />
      </button>

      {dropDown && dropDownList}
    </div>
  );
};

export default FilterDropDown;
