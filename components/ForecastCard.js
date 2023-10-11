import React from 'react'

const ForecastCard = ({day, date, summary, maxTemp, minTemp, windSpeed, icon}) => {
  return (
    <div className="w-56 h-64 px-6 py-4 rounded-md bg-slate-200 text-slate-800">
        <div className="flex flex-wrap justify-center">
            <h2 className='pb-1 text-xl font-bold'>{day}</h2>
            <h3 className='pb-2 font-bold'>{date}</h3>
        </div>
        <p>{summary}</p>
        <p className='pt-2'>Max temp: {maxTemp}</p>
        <p>Min temp: {minTemp}</p>
        <p>WindSpeed: {windSpeed}</p>
        <img src={icon}/>
    </div>
  )
}

export default ForecastCard