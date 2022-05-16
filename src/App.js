import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import CurrentWeather from './CurrentWeather';
import { WEATHER } from './shared/weather';
import { COUNTRIES } from './shared/countryCodes'
import DailyWeather from './DailyWeather';
//import Alerts from './alert';
//import AlertsDialog from './alertDialog';
import AlertAccordion from './alertAccordion';
//import HourlyWeather from './hourlyWeather';
//import RecipeReviewCard from './recipeReviewCard';
//import InputComponent from './inputComponent';
//import { IconButton } from '@mui/material';
import { TextField, Select, FormControl, MenuItem, InputLabel, Box, useTheme, ThemeProvider, createTheme, Button } from '@mui/material';


function App() {
  
  let weatherUrl = '/api/weather?';
  let reverseUrl = '/api/reverse?';
  let geoUrl = '/api/location?'

  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  //const [city, setCity] = useState();

  const [country, setCountry] = useState('US')
  const [zip, setZip] = useState('15201')
  const [location, setLocation] = useState({})
  //let lat = location.lat;
  //let lon = location.lon;
  let city = location.name;

  

  //const [forecast, setForecast] = useState([])

  //use local data during development
  //const [forecast, setForecast] = useState(WEATHER);
  const [forecast, setForecast] = useState();


  //const [errors, setErrors] = useState([]);

  //const apiKey = process.env.REACT_APP_API_KEY;
  //const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=${apiKey}`;
  //const apiGeoUrl = `http://api.openweathermap.org/geo/1.0/zip?zip=${zip},${country}&appid=${apiKey}`;
  
  // async function fetchWeat() {
  //   if(location) {
  //     console.log('this is from the thing')
  //     fetch(`${weatherUrl}latitude=${location.lat}&longitude=${location.lon}`)
  //     .then((res) => res.json())
  //     .then((data) => setForecast(data));
  //   }
  //   }
  

  const handleCountry = (event) => {
    //updateCountry = event.target.value;
    setCountry(event.target.value)
    console.log('this is country: ' + country)
  }
  const handleZip = (event) => {
    //updateZip = event.target.value;
    setZip(event.target.value)
    console.log('this is zip: ' + zip)
  }


  //This is the one you were working on
//   useEffect(() => {
//     //let newLat = '';
//     //let newLon = '';
//     const fetchCords = async () => {
//       console.log(`/api/location?zip=${zip}&country=${country}`)
//     await fetch(`/api/location?zip=${zip}&country=${country}`)
//       .then((res) => res.json())
//       .then((data) => {
//          //newLat = data.latitude;
//          //newLon = data.longitude;
//         //setLocation(data)
//       setLat(data.lat)
//       setLon(data.lon)}
//         );
//         console.log(location)

      
//   } 
//     const fetchWeather = async () => {
//       console.log(`/api/weather?latitude=${location.lat}&longitude=${location.lon}`)
//       await fetch(`/api/weather?latitude=${location.lat}&longitude=${location.lon}`)
//       .then((res) => res.json())
//       .then((data2) => setForecast(data2));
//     }
//   fetchCords()
//   .catch(console.error);

//   if ( lat && lon ) {
//   fetchWeather()
//   .catch(console.error);
//   }
// },[zip, country, location, lat, lon])


//   useEffect(() => {
//     if (location) {
//     const fetchWeather = async () => {
//       await fetch(`/api/weather?latitude=${location.lat}&longitude=${location.lon}`, {
//         headers : {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//         }
//       })
//       .then(res=>res.json())
//       .then(res=> {
//         setForecast(res)
//         //console.log(data)
//       })
//     }
//   fetchWeather()
//   .catch(console.error);
// }
//   }, [location])


  useEffect(() => {
    const fetchWea = async () => {
      try {
        const loc = await fetch (`/api/location?zip=${zip}&country=${country}`)
        .then((res) => res.json())
        .then((res) => setLocation(res))
        //console.log(location)

        const wea = await fetch(`/api/weather?latitude=${location.lat}&longitude=${location.lon}`)
        .then((res) => res.json())
        .then((res) => setForecast(res))
        //console.log(forecast)
      } catch (e) {
        console.log(e)
      }
    }
      fetchWea();
    }, [zip, country, location.lat, location.lon])

  console.log('this is location' + location)
  //console.log('this is latlon: ' + lat + lon)
  console.log('this is city: ' + city)
  console.log('this is location lat' + location.lat)
  console.log('this is location lon' + location.lon)
  
  return (
    <div className="App">
      
      <Box component='form'>
        <TextField
          id='standard-basic'
          label='zip/post code'
          variant='standard'
          //placeholder={zip}
          value={zip}
          onChange={handleZip}
        />
        <TextField
          id='standard-select-country'
          variant='standard'
          select
          label='select country'
          //placeholder={country}
          value={country}
          onChange={handleCountry}
        >
            {COUNTRIES.map((country) => (
                  <MenuItem key={country.countryCode} value={country.alpha2}>
                      {country.name}
                    </MenuItem>
              ))}
        </TextField>
        
      </Box>
      {forecast ?
      <div>
        <p>forecast is true</p>
        
        
      </div>
    : <h1>Loading...</h1>}
      
    </div>
  );
}

export default App;
