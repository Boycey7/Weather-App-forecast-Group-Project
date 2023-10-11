"use client"

import Image from 'next/image'
import { ApiClient } from '@/ApiClient/client'
import { useEffect, useState } from "react"
import ForecastCard from '@/components/ForecastCard'

export default function Home() {
  const apiClient = new ApiClient();

  const [city, setCity] = useState("sheffield");
  const [forecast, setForecast] = useState([]);
  const [filteredForecasts, setFilteredForecasts] = useState([])
  

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await apiClient.getForecast(city)
        setForecast(data.list);
        console.log(data.list)
      } catch (error) {
      console.log(await apiClient.getForecast("sheffield"))
    }
  }
    fetchData();
  }, [city])


  useEffect(() => {
    const arrayOfDays = [];
    for (let i = 0; i < 40; i += 8) {
      arrayOfDays.push(forecast[i])
    }
    setFilteredForecasts(arrayOfDays)
    console.log(filteredForecasts)
  }, [forecast])
  


  

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      {filteredForecasts.map((item, index) => (
        <ForecastCard 
        key={index} 
        day={formatDay(item.dt)}
        date={formatDate(item.dt)}
        summary={item.weather[0].description}
        maxTemp={`${item.main.temp_max} °C`}
        minTemp={`${item.main.temp_min} °C`}
        windSpeed={`${item.wind.speed} m/s`}
        icon={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        />
      ))}
    </main>
  );
}
