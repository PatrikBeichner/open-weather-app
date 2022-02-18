import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {


  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  const [errors, setErrors] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=${apiKey}`

  //get location via browser geolocation
  useEffect(() => {
    if (!navigator.geolocation) {
      setErrors(errors => [...errors, "Location not supported"]);
    } else {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        });

      console.log("Latitude is: ", lat)
      console.log("Longitude is: ", lon)
    }

    
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
