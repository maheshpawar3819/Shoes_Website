import React, { useState } from "react";
import { searchbtn } from "./Utils/icons";
const Search = () => {
  const get = (dta) => {
    let grab = dta.target.value;
    console.log(grab);
  };

  return (
    <div>
      <input
        type="text"
        className="border rounded-md p-1"
        placeholder="Find..."
        onChange={get}
      />
      <button className="bg-slate-500 ml-2 p-[5px] rounded-md px-6 text-white drop-shadow-xl hover:bg-slate-800">
        {searchbtn}
      </button>
    </div>
  );
};

export default Search;
