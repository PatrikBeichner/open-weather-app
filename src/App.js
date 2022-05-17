import './App.css';
import React, { useEffect, useState } from 'react';
import CurrentWeather from './CurrentWeather';
//import { WEATHER } from './shared/weather';
import { COUNTRIES } from './shared/countryCodes';
import DailyWeather from './DailyWeather';
import AlertAccordion from './alertAccordion';
import { TextField, MenuItem, Box } from '@mui/material';

function App() {
  let weatherUrl = 'https://weath-backend.herokuapp.com/api/weather?';
  // let weatherUrl = process.env.REACT_APP_API_WEA;
  //let reverseUrl = '/api/reverse?';
  let geoUrl = 'https://weath-backend.herokuapp.com/api/location?';
  // let geoUrl = process.env.REACT_APP_API_LOC;


  //set up state with initial values for first page load
  const [country, setCountry] = useState('US');
  const [zip, setZip] = useState('15201');
  
  //state hooks for location and weather data
  const [location, setLocation] = useState({});
  const [forecast, setForecast] = useState();

  //use local data during development
  //const [forecast, setForecast] = useState(WEATHER);

  //event handlers for changes of zip and country
  const handleCountry = (event) => {
    setCountry(event.target.value);
    console.log('this is country: ' + country);
  };
  const handleZip = (event) => {
    setZip(event.target.value);
    console.log('this is zip: ' + zip);
  };

  //fetches latitude and longitude from server when zip or country changes
  useEffect(() => {
    const fetchCor = async () => {
      try {
        const loc = await fetch(`${geoUrl}zip=${zip}&country=${country}`)
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

  //fetches weather data from server using info from fetch coords hook
  const searchWeather = () => {
    console.log(`${weatherUrl}latitude=${location.lat}&longitude=${location.lon}`)
    fetch(`${weatherUrl}latitude=${location.lat}&longitude=${location.lon}`)
      .then((res) => res.json())
      .then((result2) => setForecast(result2));
    //console.log(forecast)
  };

  //fetches weather data when location changes
  useEffect(() => {
    //calls weather api only when latitude and longitude change
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
          value={zip}
          onChange={handleZip}
        />
        <TextField
          id="standard-select-country"
          variant="standard"
          select
          label="select country"
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
          {forecast ? <DailyWeather dailyData={forecast.daily} /> : <h1>Loading...</h1>}
          
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default App;
