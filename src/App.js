import './App.css';
import React, { useEffect, useState } from 'react';
import CurrentWeather from './CurrentWeather';
import { WEATHER } from './shared/weather';
import DailyWeather from './DailyWeather';
import Alerts from './alert';
import AlertsDialog from './alertDialog';
import AlertAccordion from './alertAccordion';
import HourlyWeather from './hourlyWeather';
import RecipeReviewCard from './recipeReviewCard';

function App() {


  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [city, setCity] = useState();

  //const [forecast, setForecast] = useState([])

  //use local data during development
  const [forecast, setForecast] = useState(WEATHER);

  const [errors, setErrors] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=${apiKey}`

  //get location via browser geolocation
//   useEffect(() => {
// const controller = new AbortController();

//     const fetchData = async () => {
//     if (!navigator.geolocation) {
//       setErrors(errors => [...errors, "Location not supported"]);
//     } else {
//         navigator.geolocation.getCurrentPosition(function(position) {
//           setLat(position.coords.latitude);
//           setLon(position.coords.longitude);
//         });

//         // await fetch(`${process.env.REACT_APP_CITY_URL}?lat=${lat}&lon=${lon}&limit=1&appid=${process.env.REACT_APP_API_KEY}`)
//         //   .then(res=>res.json())
//         //   .then(result => {
//         //     setCity(result.name)
//         //     console.log(city)
//         //   })

//       // console.log("Latitude is: ", lat)
//       // console.log("Longitude is: ", lon)
//       }
//        fetch(`${process.env.REACT_APP_API_URL}?lat=${lat}&lon=${lon}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
//         .then(res=>res.json())
//         .then(result => {
//           setForecast(result)
//           console.log(result)
//           console.log(`${process.env.REACT_APP_API_URL}?lat=${lat}&lon=${lon}$units=imperial&APPID=${process.env.REACT_API_KEY}`)
//         })
//       .catch((err) => {
//         if (err.name === 'AbortError') {
//           console.log('successfully aborted');
//         } else {
//           //handle error here
//         }
//       })
//       return () => {
//         controller.abort();
//       }
//       }
    
//     fetchData();
    
//   }, [lat, lon]);

  if(forecast) {
  return (
    <div className="App">
      {/* <div>
        <p>yo</p>
        <p>lat: {lat}</p>
        <p>lon: {lon}</p>
      </div> */}
        {/* {forecast.alerts[0] ? <Alerts alerts={forecast.alerts} /> : null} */}
        {/* {forecast.alerts[0] ? <AlertsDialog alerts={forecast.alerts} /> : null} */}
        {forecast.alerts[0] ? <AlertAccordion alerts={forecast.alerts} /> : null}
        <CurrentWeather currentData={forecast.current} hourlyData={forecast.hourly}/>
        {/* <RecipeReviewCard /> */}
        {/* <HourlyWeather hourlyData={forecast.hourly} max={forecast.daily[0].temp.max} min={forecast.daily[0].temp.min}/> */}
        <DailyWeather dailyData={forecast.daily} />
    </div>
  );
    } else {
      return <h1>Loading...</h1>
    }
}

export default App;
