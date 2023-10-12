"use client"

import Image from 'next/image'
import { ApiClient } from '@/ApiClient/client'
import { useEffect, useState } from "react"
import ForecastCard from '@/components/ForecastCard'
import SearchBar from '@/components/SearchBar'
import Title from '@/components/Title'
import NoCityEntered from '@/components/NoCityEntered'
import Footer from '@/components/Footer'



export default function Home() {
  const apiClient = new ApiClient();

  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [title, setTitle] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [forecast, setForecast] = useState([]);
  const [filteredForecasts, setFilteredForecasts] = useState([]);
  const [realCity, setRealCity] = useState (true); 

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await apiClient.getForecast(city)
        console.log("API Response:", data);
        setForecast(data.list);
        setCountry(data.city.country);
        setRealCity(true)
        setTitle(data.city.name)
        // console.log(data.list)
      } catch (error) {
      setRealCity(false)
      console.log(await apiClient.getForecast(city))
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
  
  const [noCity, setNoCity] = useState(false)

  const handleCitySearch = (searchTerm) => {
    if (searchTerm === "") {
      console.log("no city")
      setNoCity(true)
    } else {
      setHasSearched(true);
      setCity(searchTerm)
      console.log('city updated')
      setNoCity(false)
    }
    console.log(`hasSearched = ${hasSearched}`)
  }

  // useEffect(() => {
  //   console.log(city)
  // }, [city])




  return (

    <div className="flex flex-col min-h-screen">  
            
            
            <SearchBar 
                handleCitySearch={handleCitySearch}
            />


<main className="flex-grow">

      {noCity && !hasSearched && <NoCityEntered />}
      {hasSearched && !title && <NoCityEntered />}
      

      <div className='flex flex-col justify-center w-screen'>
        <Title
          city={title}
          country={country}
        />
      </div>
     
    
<div className="flex flex-wrap justify-center gap-4 p-4">
  
        {filteredForecasts.map((item, index) => {
          if (!item || !item.dt_txt) {
            return null;
          }
          const date = new Date(item.dt_txt.replace(/ /, "T"));
          const day = date.toLocaleDateString("en-gb", { weekday: "long" });
          const formattedDate = date.toLocaleDateString("en-gb", {
            year: "numeric",
            month: "long",
            day: "numeric"
          });
  
          const windSpeedMph = (item.wind.speed * 2.23694).toFixed(1);
  
    return (
          <ForecastCard
          key={index}
          day={day}
          date={formattedDate}
          summary={item.weather[0].description}
          maxTemp={`${item.main.temp_max} °C`}
          minTemp={`${item.main.temp_min} °C`}
          currentTemp={`${parseFloat(item.main.temp).toFixed(0)}`}
          humidity={`${item.main.humidity} %`} 
          windSpeed={`${windSpeedMph} MPH`}
          icon={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          />
        
    );
    
  })}
  
  </div>
    </main>
    <Footer />
    </div>
    
    );
}

