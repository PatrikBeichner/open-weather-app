import React from 'react';
import { Box } from '@mui/system';
import { Scatter, ScatterChart, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LabelList } from 'recharts'

import {
    WeatherThunderstorm,
    WeatherDrizzle,
    WeatherRain,
    WeatherSnow,
    WeatherFog,
    WeatherSunny,
    WeatherCloudy } from '@emotion-icons/fluentui-system-regular';
  
    
  

// function RenderIcon({ data }) {

//     const CONDITIONS = {
//         Clouds: <WeatherCloudy />,
//         Clear: <WeatherSunny />,
//         Tornado: <WeatherFog />,
//         Squall: <WeatherFog />,
//         Ash: <WeatherFog />,
//         Dust: <WeatherFog />,
//         Sand: <WeatherFog />,
//         Fog: <WeatherFog />,
//         Haze: <WeatherFog />,
//         Smoke: <WeatherFog />,
//         Mist: <WeatherFog />,
//         Snow: <WeatherSnow />,
//         Rain: <WeatherRain />,
//         Drizzle: <WeatherDrizzle />,
//         Thunderstorm: <WeatherThunderstorm />,
//     };
//     const iconUrl = 'http://openweathermap.org/img/wn/';

//         //console.log(data)

//     return (
//         <>
//             {data.map(( weather, i )=>{

//                 let icon = `${iconUrl}${weather.cond}@2x.png`
//                 console.log(icon)
//                 return <img src={icon} key={i} alt={'weather'} />

//             })}
//         </>
//     )
//     //return null
// }

export default function HourlyWeather({ hourlyData }) {

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
    };

    //let cond

    let chartData = hourlyData.slice(0, 13).map(({ dt, temp, weather }) => {
        let time = new Date(dt * 1e3).toLocaleTimeString('en-US', { hour12: false, hour: '2-digit' },)
        let temF = Math.round(temp);
        let cond = weather[0].main;
        return { time, temF, cond }})
        console.log(chartData)
        console.log(CONDITIONS[chartData.cond])

//    let conSearch = `${hourlyData.weather[0].main}`;
//console.log(hourlyData)
//console.log(chartData)
  return (
    <>
        <h3>next 12 hours:</h3>
        <Box sx={{ width: 800, height: 500 }}>
        <ResponsiveContainer width='99%' height='99%'>
            <ScatterChart
                width={800}
                height={400}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis  dataKey="time" name="time" unit="h" />
                <YAxis type="number" dataKey="temF" name="temp" unit="&deg;F" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                {/* <Scatter name="Hourly Temp" data={chartData} shape={CONDITIONS[chartData.cond]}> */}
                {/* <Scatter name="Hourly Temp"  data={chartData} shape={ <RenderIcon data={chartData} />} > */}
                <Scatter name="Hourly Temp" data={chartData} shape={ CONDITIONS[chartData[0].cond] } >

                <LabelList dataKey="temF" position="bottom" />
                </Scatter>
            </ScatterChart>
        
        </ResponsiveContainer>
        </Box>
    </>
  )
}
