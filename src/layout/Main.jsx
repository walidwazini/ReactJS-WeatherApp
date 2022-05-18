import React, { useState, useRef } from "react";
import SearchBar from "../components/SearchBar";

const Main = () => {
  const searchRef = useRef();
  const [search, setSearch] = useState("");
  const [cityName, setCityName] = useState("City Name");

  const changeHandler = (ev) => setSearch(ev.target.value);

  const submitHandler = (ev) => {
    ev.preventDefault();
    const searchCity = search;
    console.log(searchCity);
    setCityName(searchCity);
    setSearch("");
  };

  return (
    <div className='basis-3/4 w-1/2 h-full'>
      <div className='h-full w-full flex flex-row items-center justify-center'>
        <div className='flex flex-col h-3/4'>
          <form onSubmit={submitHandler}>
            <SearchBar
              // ref={searchRef}
              value={search}
              onChange={changeHandler}
              placeholder='Search a city..'
              color={"bg-red-70"}
              buttonType='submit'
            />
          </form>
          <div className='h-3/4'>
            <div
              id='city-display'
              className='h-4/5 flex flex-col justify-center items-center bg-yellow-50 mt-5 px-4 py-[8%] shadow-md '
            >
              <div id='city-name'>
                <h2 className='text-[30px] text-red-500'>{cityName}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
