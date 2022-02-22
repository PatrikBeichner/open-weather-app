import React from 'react'

export default function CurrentWeather({currentData, hourlyData}) {
  return (
    <div>
        <p>Current weather</p>
        <p>{currentData.temp}</p>
    </div>
  )
}
