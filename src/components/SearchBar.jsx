import React, { useState } from "react";

const SearchBar = ({ fetch }) => {
  const [search, setSearch] = useState("");

  const searchHandler = async (e) => {
    if (e.key === "Enter") {
      console.log("Entered");
      fetch(e.target.value);
      setSearch("");
    }
  };

  const changeHandler = (ev) => {
    console.log(ev.target.value);
  };

  return (
    <div className='h-1/4'>
      <div className='relative w-[400px]'>
        <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'></div>
        <input
          type='text'
          id='city-search'
          placeholder='Search a city..'
          onKeyPress={searchHandler}
          className='block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          required
        />
        <button
          type='submit'
          class='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
