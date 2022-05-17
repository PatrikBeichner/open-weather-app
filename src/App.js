import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import CurrentWeather from './CurrentWeather';
import { WEATHER } from './shared/weather';
import { COUNTRIES } from './shared/countryCodes';
import DailyWeather from './DailyWeather';
//import Alerts from './alert';
//import AlertsDialog from './alertDialog';
import AlertAccordion from './alertAccordion';
//import HourlyWeather from './hourlyWeather';
//import RecipeReviewCard from './recipeReviewCard';
//import InputComponent from './inputComponent';
//import { IconButton } from '@mui/material';
import {
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Box,
  useTheme,
  ThemeProvider,
  createTheme,
  Button,
} from '@mui/material';

function App() {
  //let weatherUrl = '/api/weather?';
  //let reverseUrl = '/api/reverse?';
  //let geoUrl = '/api/location?';


  const [country, setCountry] = useState('US');
  const [zip, setZip] = useState('15201');
  const [location, setLocation] = useState({});

  //use local data during development
  //const [forecast, setForecast] = useState(WEATHER);
  const [forecast, setForecast] = useState();


  const handleCountry = (event) => {
    setCountry(event.target.value);
    console.log('this is country: ' + country);
  };
  const handleZip = (event) => {
    setZip(event.target.value);
    console.log('this is zip: ' + zip);
  };


  useEffect(() => {
    const fetchCor = async () => {
      try {
        const loc = await fetch(`/api/location?zip=${zip}&country=${country}`)
          .then((res) => res.json())
          .then((data) => setLocation(data));
        console.log('this is fetchCor');
        //console.log(loc.location.lat)
        //console.log(location)

        
      } catch (e) {
        console.log(e);
      }
    };
    fetchCor();
  }, [zip, country]);

  const searchWeather = () => {
    fetch(`/api/weather?latitude=${location.lat}&longitude=${location.lon}`)
      .then((res) => res.json())
      .then((result2) => setForecast(result2));
      //console.log(forecast)
  };

  useEffect(() => {

    if (location.lat && location.lon) {
      searchWeather();
    }
  }, [location]);

  //console.log('this is location' + location);
  //console.log('this is latlon: ' + lat + lon)
  //console.log('this is city: ' + city);
  //console.log('this is location lat' + location.lat);
  //console.log('this is location lon' + location.lon);

  return (
    <div className="App">
      <Box component="form">
        <TextField
          id="standard-basic"
          label="zip/post code"
          variant="standard"
          //placeholder={zip}
          value={zip}
          onChange={handleZip}
        />
        <TextField
          id="standard-select-country"
          variant="standard"
          select
          label="select country"
          //placeholder={country}
          value={country}
          onChange={handleCountry}>
          {COUNTRIES.map((country) => (
            <MenuItem key={country.countryCode} value={country.alpha2}>
              {country.name}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      {forecast ? (
        <div>
          {forecast.alerts ? <AlertAccordion alerts={forecast.alerts} /> : <></>}
          <h1>{location.name}</h1>
          {forecast ? (
            <CurrentWeather
              currentData={forecast.current}
              hourlyData={forecast.hourly}
              low={forecast.daily[0].temp.min}
              hi={forecast.daily[0].temp.max}
            />
          ) : (
            <h1>Loading...</h1>
          )}
          {/* <CurrentWeather currentData={forecast.current} hourlyData={forecast.hourly} low={forecast.daily[0].temp.min} hi={forecast.daily[0].temp.max}/> */}
          {/* <RecipeReviewCard /> */}
          {forecast ? <DailyWeather dailyData={forecast.daily} /> : <h1>Loading...</h1>}
          {/* <DailyWeather dailyData={forecast.daily} /> */}
          {/* <HourlyWeather hourlyData={forecast.hourly} max={forecast.daily[0].temp.max} min={forecast.daily[0].temp.min}/> */}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default App;
