import React from "react";
import { clsx } from "clsx";
import { IoSearchCircleSharp } from "react-icons/io5";

type Props = { className?: string };

const Searchbar = ({ className }: Props) => {
  return (
    <div className="pr-6 pl-6">
      <div
        className={clsx("relative w-full", {
          "lg:hidden": className === "1",
          "max-w-[300px] hidden lg:block": className === "2",
        })}
      >
        <input
          type="text"
          className="bg-slate-50 border-2 border-yellow-500 outline-none px-6 py-3 rounded-[30px] w-full"
          placeholder="Search Product .."
          aria-placeholder="Search Product"
        ></input>
        <IoSearchCircleSharp className=" absolute size-11 top-1 right-1"></IoSearchCircleSharp>
      </div>
    </div>
  );
};

export default Searchbar;
