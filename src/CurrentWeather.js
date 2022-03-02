import React from 'react'
// import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';


export default function CurrentWeather({currentData, hourlyData}) {
  
    const iconUrl = 'http://openweathermap.org/img/wn/'

    if (currentData) {
    
        let currTemp = Math.round(currentData.temp)
        console.log(currTemp)
        let fLike = Math.round(currentData.feels_like)
        let icon = `${iconUrl}${currentData.weather[0].icon}@2x.png`

    return (
    <>
        {/* <div>
            <p>Current weather</p>
            <p>{currTemp}&deg;F</p>
            <p>{fLike}&deg;F</p>
            <p>{currentData.humidity}&#37;</p>
            <p>{currentData.weather[0].main}</p>
            <img src={`${iconUrl}${currentData.weather[0].icon}@2x.png`} alt={currentData.weather[0].main}/>
        </div> */}
        {/* <Box display='center' > */}
            <Grid 
              container
              justifyContent='center'
              alignItems='center'
              spacing={2}
            >
                <Grid item xs={10} lg={6}>
                    <Card sx={{   display: 'flex' }}>
                        <CardMedia
                            component="img"
                            image={icon}
                            alt={currentData.weather[0].main} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {currTemp}&deg;F
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {currentData.weather[0].main}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                feels like: {fLike}&deg;F
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                humidity: {currentData.humidity}&#37;
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                sunrise: {new Date(currentData.sunrise * 1000).toLocaleTimeString('en-IN')};
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                sunset: {new Date(currentData.sunset * 1000).toLocaleTimeString('en-IN')};
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        {/* </Box> */}
    </>
  )} else {
      return (
          <div>
              <h1>Loading...</h1>
          </div>
      )
  }
}
