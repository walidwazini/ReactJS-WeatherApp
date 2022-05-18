import React, { useState } from "react";

import SearchBar from "../components/SearchBar";
import fetchWeather from "../api/fetchWeather";

const Main = () => {
  const [search, setSearch] = useState("");
  // const [cityName, setCityName] = useState("City Name");
  const [searchCity, setSearchCity] = useState({});

  const changeHandler = (ev) => setSearch(ev.target.value);

  const submitHandler = async (ev) => {
    ev.preventDefault();

    const data = await fetchWeather(search);
    setSearchCity(data);
    console.log(data.weather);
    setSearch("");

    return data;
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
                {searchCity.main && (
                  <div>
                    <h2 className='text-[30px] text-red-500'>
                      {searchCity.name}
                    </h2>
                    <h3>{searchCity.main.temp}</h3>
                    <h3>{searchCity.sys.country}</h3>
                    <div>
                      <img
                        src={`https://openweathermap.org/img/wn/${searchCity.weather[0].icon}@2x.png`}
                      />
                      <p>{searchCity.weather[0].description}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
