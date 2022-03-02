import React from 'react'

export default function HourlyWeather({hourlyData, max, min}) {

    let chartMax= max.toFixed(0) +5;
    let chartMin= min.toFixed(0) - 5;
  return (
    <div>
        <p>{chartMax}</p>
        <p>{chartMin}</p>
        {hourlyData.slice(0, 12).map((hourly, i) =>{
            return(
                <div key={i}>
                    <p>{i}</p>
                    <p>{new Date(hourly.dt * 1000).toLocaleTimeString('en-us')}</p>
                    <p>{hourly.temp.toFixed(0)}&deg;F</p>
                </div>
            )
        })}
        Hourly data
    </div>
  )
}
