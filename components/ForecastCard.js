import React from 'react'

const ForecastCard = ({day, date, summary, maxTemp, minTemp, windSpeed, icon, currentTemp, humidity}) => {
  return (
    <div className="p-6 space-y-4 rounded-lg shadow-lg bg-gradient-to-br from-blue-200 to-blue-500">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-white">{day}</h2>
        <h3 className="font-medium text-white text-md">{date}</h3>
      </div>
      <img src={icon} alt="Weather icon" className="w-16 h-16" />
    </div>
    
    <div className="text-center">
      <p className="mb-1 text-6xl text-white">{currentTemp}°C</p>
      <p className="mt-1 text-white capitalize">{summary}</p>
    </div>
    
    <div className="grid grid-cols-2 gap-4 mt-4">
      <p className="text-white">Min: {minTemp}</p>
      <p className="text-white">Max: {maxTemp}</p>
      <p className="text-white">Humidity: {humidity}</p>
      <p className="text-white">Wind: {windSpeed}</p>
    </div>
  </div>
);
};

export default ForecastCard