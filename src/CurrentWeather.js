import React from 'react'
// import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'

export default function CurrentWeather({currentData, hourlyData}) {
  
    const iconUrl = 'http://openweathermap.org/img/wn/'

    if (currentData) {
    
        let currTemp = Math.round(currentData.temp)
        console.log(currTemp)
        let fLike = Math.round(currentData.feels_like)

    return (
    <>
        <div>
            <p>Current weather</p>
            <p>{currTemp}&deg;F</p>
            <p>{fLike}&deg;F</p>
            <p>{currentData.humidity}&#37;</p>
            <p>{currentData.weather[0].main}</p>
            <img src={`${iconUrl}${currentData.weather[0].icon}@2x.png`} alt={currentData.weather[0].main}/>
        </div>
    </>
  )} else {
      return (
          <div>
              <h1>Loading...</h1>
          </div>
      )
  }
}
