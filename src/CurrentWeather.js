import React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
//import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { ArrowDropUp } from '@mui/icons-material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Collapse } from '@mui/material';
import HourlyWeather from './hourlyWeather';
// import {
//   WeatherThunderstorm,
//   WeatherDrizzle,
//   WeatherRain,
//   WeatherSnow,
//   WeatherFog,
//   WeatherSunny,
//   WeatherCloudy } from '@emotion-icons/fluentui-system-regular';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CurrentWeather({ currentData, hourlyData, low, hi }) {
  const [expanded, setExpanded] = useState(false);

  const iconUrl = 'http://openweathermap.org/img/wn/';
  let icon = `${iconUrl}${currentData.weather[0].icon}@2x.png`;


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (currentData) {

    return (
      <>

        <Box display='center' sx={{m: 2}}>
                                  {/* sx={{ border: 1, borderColor: 'green'}} */}
        <Grid container justifyContent="center" alignItems="center" spacing={10} >
          <Grid item xs={10} lg={6} sx={{width: '100%'}}>
            <Card>
              <CardContent sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'center' }}>

                <CardMedia>
                  <img src={icon} alt={currentData.weather[0].main} />
                  <Typography gutterBottom variant="h5" component="div">
                    {currentData.weather[0].main}
                  </Typography>
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {Math.round(currentData.temp)}&deg;F
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    <ArrowUpwardIcon /> {Math.round(hi)}&deg;F <ArrowDownwardIcon />{Math.round(low)}&deg;F
                  </Typography>
                                {/* <Typography gutterBottom variant="h5" component="div">
                                  {currentData.weather[0].main}
                                </Typography> */}
                  <Typography variant="body2" color="text.secondary">
                    feels like: {Math.round(currentData.feels_like)}&deg;F
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary">
                    sunrise: {new Date(currentData.sunrise * 1000).toLocaleTimeString('en-IN')};
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    sunset: {new Date(currentData.sunset * 1000).toLocaleTimeString('en-IN')};
                  </Typography>
                </CardContent>
                <CardContent>
                
                  <Typography variant="body2" color="text.secondary">
                    humidity: {currentData.humidity}&#37;
                  </Typography>
                  <Typography variant="body2" color="text.secondary" >dewpoint: {Math.round(currentData.dew_point)}&deg;F</Typography>
                  <Typography variant="body2" color="text.secondary" >uv index: {Math.round(currentData.uvi)}</Typography>
                  <Typography variant="body2" color="text.secondary" >
                    wind: {Math.round(currentData.wind_speed)}mph <ArrowDropUp style={{ fontSize: '2rem', transform: `rotate(${currentData.wind_deg}deg)`}} />
                  </Typography>
                  <Typography variant="body2" color="text.secondary" >pressure: {currentData.pressure} mbar</Typography>
                </CardContent>
              </CardContent>
              <CardActions disableSpacing wrap={"nowrap"}>
                <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>

              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <p>maybe that the memory leak</p>
                  <HourlyWeather hourlyData={hourlyData} />
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>
        </Box>
      </>
    );
  } else {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
}
