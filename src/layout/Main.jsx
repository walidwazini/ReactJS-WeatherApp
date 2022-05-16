import React from "react";
import SearchBar from "../components/SearchBar";

const testWeather = (e) => {
  console.log(e);
};

const Main = () => {
  return (
    <div className='basis-3/4 bg-red-400 w-1/2 h-full'>
      <div className='h-full w-full flex flex-row items-center justify-center'>
        <div className='flex flex-col h-3/4'>
          <SearchBar fetch={testWeather} />
          <div className='h-3/4'>
            <h1>City Display</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
