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
import { IconButton } from '@mui/material';
import { TextField, Select, FormControl, MenuItem, InputLabel, Box, useTheme, ThemeProvider, createTheme } from '@mui/material';
import { Brightness4TwoTone, Brightness7TwoTone } from '@mui/icons-material';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export function useDebounce(value, time) {
  const [_value, setValue] = useState(value);
  const mountedRef = useRef(false);
  const timeRef = useRef(null);

  const cancel = () => window.clearTimeout(timeRef.current)

  useEffect(() => {
    cancel();
    timeRef.current = window.setTimeout(()=>{
      setValue(value);
      }, time);
}, [value]);

useEffect(() => {
  mountedRef.current = true;
  return cancel;
  }, []);

  return [_value, cancel];
}

function App() {
  //const theme = useTheme();
  
  let weatherUrl = '/api/weather?';
  let reverseUrl = '/api/reverse?';
  let geoUrl = '/api/location?'

  //const [lat, setLat] = useState();
  //const [lon, setLon] = useState();
  //const [city, setCity] = useState();

  const [country, setCountry] = useState('US')
  const [zip, setZip] = useState('15201')
  const [location, setLocation] = useState({})
  let lat = location.lat;
  let lon = location.lon;
  let city = location.name;

  //const [forecast, setForecast] = useState([])

  //use local data during development
  const [forecast, setForecast] = useState(WEATHER);

  const [errors, setErrors] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=${apiKey}`;
  const apiGeoUrl = `http://api.openweathermap.org/geo/1.0/zip?zip=${zip},${country}&appid=${apiKey}`;
  

  const handleCountry = (event) => {
    setCountry(event.target.value)
    console.log('this is country: ' + country)
  }
  const handleZip = (event) => {
    setZip(event.target.value)
    console.log('this is zip: ' + zip)
  }

  useEffect(() => {
    const fetchCords = async () => {
      console.log(`${geoUrl}zip=${zip}&country=${country}`)
    fetch(`${geoUrl}zip=${zip}&country=${country}`)
      .then((res) => res.json())
      .then((data) => setLocation(data));
  } 
    const fetchWeather = async () => {
      console.log(`${weatherUrl}latitude=${location.lat}&longitude=${location.lon}`)
      fetch(`${weatherUrl}latitude=${location.lat}&longitude=${location.lon}`)
      .then((res) => res.json())
      .then((data2) => setForecast(data2));
    }
  fetchCords()
  .catch(console.error);

  fetchWeather()
  .catch(console.error);
},[zip, country, geoUrl, weatherUrl])

  // useEffect(() => {
  //   const fetchWeather = async () => {
  //     fetch(`${weatherUrl}latitude=${lat}&longitude=${lon}`, {
  //       headers : {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //       }
  //     })
  //     .then(res=>res.json())
  //     .then(data=> {
  //       setForecast(data)
  //       //console.log(data)
  //     })
  //   }
  // fetchWeather()
  // .catch(console.error);
    
  // }, [location])



  console.log(location)
  console.log('this is latlon: ' + lat + lon)
  console.log('this is city: ' + city)

  
  // const fetchWeather = async (latitude, longitude) =>{
  //   let response = await fetch(apiUrl);
  //   let body = await response.json();

  //   if (body.cod == 404) {
  //     setErrors(body.message);
  //   } else {
      
  //   }

  // }

  //get location via browser geolocation
// useEffect(() => {
//   const controller = new AbortController();
  
//       const fetchData = async () => {
//       if (!navigator.geolocation) {
//         setErrors(errors => [...errors, "Location not supported, please enter a zip code and country"]);
//       } else {
//           navigator.geolocation.getCurrentPosition(function(position) {
//             setLat(position.coords.latitude);
//             setLon(position.coords.longitude);
//           });
//           console.log("pasted stuff")
//           console.log(`${weatherUrl}latitude=${lat}&longitude=${lon}`);
//           await fetch(`${weatherUrl}latitude=${lat}&longitude=${lon}`, {
//             headers : { 
//               'Content-Type': 'application/json',
//               'Accept': 'application/json'
//              }
//           })
//           .then(res=>res.json())
//           .then(result => {
//             setForecast(result)
//             console.log(result)
//             // console.log(`${process.env.API_URL_WEATHER}latitude=${lat}&longitude=${lon}`)
//           })

//           await fetch(`${reverseUrl}latitude=${lat}&longitude=${lon}`, {
//             headers : {
//               'Content-Type': 'application/json',
//               'Accept': 'application/json'
//             }
//           })
//           .then(res=>res.json())
//           .then(result => {
//             setCity(result.name)
//             console.log(result[0].name)
//           })
//           // await fetch(`${process.env.API_URL_LOCATION}zip=${zip}&country=${country}`)
//           //   .then(res=>res.json())
//           //   .then(result => {
//           //     setCity(result.name)
//           //     console.log(city)
//           //   })
  
//         console.log("Latitude is: ", lat)
//         console.log("Longitude is: ", lon)
//         }
//         //  fetch(`${process.env.API_URL_WEATHER}latitude=${lat}&longitude=${lon}`)
//         //   .then(res=>res.json())
//         //   .then(result => {
//         //     setForecast(result)
//         //     console.log(result)
//         //     console.log(`${process.env.API_URL_WEATHER}latitude=${lat}&longitude=${lon}`)
//         //   })
//         // .catch((err) => {
//         //   if (err.name === 'AbortError') {
//         //     console.log('successfully aborted');
//         //   } else {
//         //     //handle error here
//         //   }
//         // })
//         return () => {
//           controller.abort();
//         }
//         }
      
//       fetchData();
      
//     }, [lat, lon]);



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
//       }
//     }
//   }, [lat, lon])

        // await fetch(`${process.env.REACT_APP_CITY_URL}?lat=${lat}&lon=${lon}&limit=1&appid=${process.env.REACT_APP_API_KEY}`)
        //   .then(res=>res.json())
        //   .then(result => {
        //     setCity(result.name)
        //     console.log(city)
        //   })

      // console.log("Latitude is: ", lat)
      // console.log("Longitude is: ", lon)
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
        {/* Change to on submit */}
        <TextField
          id='standard-basic'
          label='zip/post code'
          variant='standard'
          value={zip}
          onChange={handleZip}
        />
        <TextField
          id='standard-select-country'
          variant='standard'
          select
          label='select country'
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
    
        {/* {forecast.alerts[0] ? <Alerts alerts={forecast.alerts} /> : null} */}
        {/* {forecast.alerts[0] ? <AlertsDialog alerts={forecast.alerts} /> : null} */}
        {forecast.alerts[0] ? <AlertAccordion alerts={forecast.alerts} /> : null}
        <CurrentWeather currentData={forecast.current} hourlyData={forecast.hourly} low={forecast.daily[0].temp.min} hi={forecast.daily[0].temp.max}/>
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
