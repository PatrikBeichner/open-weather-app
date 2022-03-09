import './App.css';
import React, { useEffect, useState } from 'react';
import CurrentWeather from './CurrentWeather';
import { WEATHER } from './shared/weather';
import { COUNTRIES } from './shared/countryCodes'
import DailyWeather from './DailyWeather';
import Alerts from './alert';
import AlertsDialog from './alertDialog';
import AlertAccordion from './alertAccordion';
import HourlyWeather from './hourlyWeather';
import RecipeReviewCard from './recipeReviewCard';
import InputComponent from './inputComponent';
import { TextField, Select, FormControl, MenuItem, InputLabel, Box } from '@mui/material'

function App() {


  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [city, setCity] = useState();

  const [country, setCountry] = useState('US')
  const [zip, setZip] = useState('')
  const [location, setLocation] = useState({})

  //const [forecast, setForecast] = useState([])

  //use local data during development
  const [forecast, setForecast] = useState(WEATHER);

  const [errors, setErrors] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=${apiKey}`;
  const apiGeoUrl = `http://api.openweathermap.org/geo/1.0/zip?zip=${zip},${country}&appid=${apiKey}`

  const handleCountry = (event) => {
    setCountry(event.target.value)
    console.log('this is country: ' + country)
  }
  const handleZip = (event) => {
    setZip(event.target.value)
    console.log('this is zip: ' + zip)
  }

  useEffect(() => {
    fetch(apiGeoUrl)
      .then((res) => res.json())
      .then((data) => setLocation(data));
  }, [apiGeoUrl])

  console.log(location)

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
        <Box component='form'>
        <TextField
          id='outlined-basic'
          label='zip/post code'
          variant='outlined'
          value={zip}
          onChange={handleZip}
        />
        <TextField
          id='outlined-select-country'
          select
          label='select'
          value={country}
          onChange={handleCountry}
          helperText='Select country'>
              {COUNTRIES.map((country) => (
                  <MenuItem key={country.countryCode} value={country.alpha2}>
                      {country.name}
                    </MenuItem>
              ))}
        </TextField>
    </Box>
        {/* {forecast.alerts[0] ? <Alerts alerts={forecast.alerts} /> : null} */}
        {/* {forecast.alerts[0] ? <AlertsDialog alerts={forecast.alerts} /> : null} */}
        {forecast.alerts[0] ? <AlertAccordion alerts={forecast.alerts} /> : null}
        <CurrentWeather currentData={forecast.current} hourlyData={forecast.hourly}/>
        {/* <RecipeReviewCard /> */}
        <DailyWeather dailyData={forecast.daily} />
        {/* <HourlyWeather hourlyData={forecast.hourly} max={forecast.daily[0].temp.max} min={forecast.daily[0].temp.min}/> */}
    </div>
  );
    } else {
      return <h1>Loading...</h1>
    }
}

export default App;
