import React from 'react'

const ForecastCard = ({day, date, summary, maxTemp, minTemp, windSpeed, icon, currentTemp, humidity}) => {
  return (
    <div className="p-4 rounded-md shadow-md bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 ">
      <div className="relative">
        <img src={icon} alt="Weather icon" className="absolute w-12 h-12 top-2 left-2" />
        <p className="mb-4 text-6xl text-center text-white">{currentTemp}<span className="absolute top-0 right-0 text-xl">°C</span></p>
        <h2 className="text-xl font-semibold text-white">{day}</h2>
        <h3 className="mb-1 font-medium text-white text-md">{date}</h3>
        <p className="mt-2 text-white capitalize">{summary}</p>
      </div>
    
      <div className="mt-4">
        <p className="text-center text-white">Max Temp: {maxTemp}</p>
        <p className="text-center text-white">Min Temp: {minTemp}</p>
        <p className="text-center text-white">Humidity: {humidity}</p>
        <p className="text-center text-white">Wind Speed: {windSpeed}</p>
      </div>
    </div>
    
  );
};

export default ForecastCard