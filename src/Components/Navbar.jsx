import { data } from "autoprefixer";
import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/SearchSlice";
export default function Navbar() {
  const dispatch = useDispatch();
  return (
    <>
      <nav className=" flex flex-col lg:flex-row justify-between mx-6 py-3 ">
        <div>
          <h3 className="text-xl font-bold text-gray-600">
            {" "}
            {new Date().toUTCString().slice(0, 16)}
          </h3>
          <h1 className="text-2xl font-bold">Food~X</h1>
        </div>
        <div>
          <input
            className="p-3 border-gray-400 text-sm rounded-lg  w-full lg:w-[25vw]"
            type="search"
            name="search"
            placeholder="Search here"
            id=""
            autoComplete="off"
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
        </div>
      </nav>
    </>
  );
}
