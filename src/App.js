import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {


  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [forecast, setForecast] = useState([]);

  const [errors, setErrors] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=${apiKey}`

  //get location via browser geolocation
  useEffect(() => {
const controller = new AbortController();

    const fetchData = async () => {
    if (!navigator.geolocation) {
      setErrors(errors => [...errors, "Location not supported"]);
    } else {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        });

      // console.log("Latitude is: ", lat)
      // console.log("Longitude is: ", lon)
      }
      await fetch(`${process.env.REACT_APP_API_URL}?lat=${lat}&lon=${lon}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res=>res.json())
        .then(result => {
          setForecast(result)
          console.log(result)
          console.log(`${process.env.REACT_APP_API_URL}?lat=${lat}&lon=${lon}$units=imperial&APPID=${process.env.REACT_API_KEY}`)

        })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('successfully aborted');
        } else {
          //handle error here
        }
      })
      return () => {
        controller.abort();
      }
      }
    
    fetchData();
    
  }, [lat, lon]);


  return (
    <div className="App">
      <p>yo</p>
      <p>lat: {lat}</p>
      <p>lon: {lon}</p>
    </div>
  );
}

export default App;
