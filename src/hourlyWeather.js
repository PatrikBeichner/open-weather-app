import React from 'react';
import { Box } from '@mui/system';
import { Scatter, ScatterChart, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

import {
    WeatherThunderstorm,
    WeatherDrizzle,
    WeatherRain,
    WeatherSnow,
    WeatherFog,
    WeatherSunny,
    WeatherCloudy } from '@emotion-icons/fluentui-system-regular';
  
    const CONDITIONS = {
      Clouds: <WeatherCloudy />,
      Clear: <WeatherSunny />,
      Tornado: <WeatherFog />,
      Squall: <WeatherFog />,
      Ash: <WeatherFog />,
      Dust: <WeatherFog />,
      Sand: <WeatherFog />,
      Fog: <WeatherFog />,
      Haze: <WeatherFog />,
      Smoke: <WeatherFog />,
      Mist: <WeatherFog />,
      Snow: <WeatherSnow />,
      Rain: <WeatherRain />,
      Drizzle: <WeatherDrizzle />,
      Thunderstorm: <WeatherThunderstorm />,
  }
  

export default function HourlyWeather({ hourlyData }) {

//   let conSearch = `${hourlyData.weather[0].main}`;
console.log(hourlyData)
  return (
    <>
        <h1>hopefully a chart is here someday</h1>
        <Box sx={{ width: '100%', height: '100%' }}>
        <ResponsiveContainer width='99%' height='99%'>
            <ScatterChart
                width={400}
                height={400}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid />
                <XAxis type="number" dataKey="hourlyData.dt" name="time" unit="h" />
                <YAxis type="number" dataKey="y" name="hourlyData.temp" unit="deg" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="Hourly Temp" data={hourlyData.temp} />
            </ScatterChart>
        
        </ResponsiveContainer>
        </Box>
    </>
  )
}
