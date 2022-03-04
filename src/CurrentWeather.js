import React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import { CONDITIONS } from './shared/conditions';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Collapse } from '@mui/material';
import {
  WeatherThunderstorm,
  WeatherDrizzle,
  WeatherRain,
  WeatherSnow,
  WeatherFog,
  WeatherSunny,
  WeatherCloudy } from '@styled-icons/fluentui-system-regular'

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

export default function CurrentWeather({ currentData, hourlyData }) {
  const [expanded, setExpanded] = useState(false);

  const iconUrl = 'http://openweathermap.org/img/wn/';

  let currTemp = Math.round(currentData.temp);
  console.log(currTemp);
  let fLike = Math.round(currentData.feels_like);
  let icon = `${iconUrl}${currentData.weather[0].icon}@2x.png`;

  let conSearch = `${currentData.weather[0].main}`;
  // let iconEle = CONDITIONS.filter(word => word.main.indexOf(conSearch) >= 0).map(ele => ele.icon);
  // let iconEle = [CONDITIONS.find(({ main }) => main === conSearch)]

  console.log(conSearch);
  // console.log(iconEle);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (currentData) {
    // let currTemp = Math.round(currentData.temp);
    // console.log(currTemp);
    // let fLike = Math.round(currentData.feels_like);
    // let icon = `${iconUrl}${currentData.weather[0].icon}@2x.png`;

    // let conSearch = `${currentData.weather[0].main}`;
    // let iconEle = CONDITIONS.filter((word) => word.main.indexOf(conSearch) >= 0);
    // console.log(conSearch);
    // console.log(iconEle);

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
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={10} lg={6}>
            <Card>
              <CardContent sx={{ display: 'flex' }}>
                {/* <CardMedia component="img" image={icon} alt={currentData.weather[0].main} /> */}
                {CONDITIONS[conSearch]}                
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
              </CardContent>
              <CardActions disableSpacing>
                <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>

              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>dewpoint: {currentData.dew_point}:</Typography>
                  <Typography paragraph>uv index: {currentData.uvi}</Typography>
                  <Typography paragraph>wind speed: {currentData.wind_speed}</Typography>
                  <Typography paragraph>wind gusts: {currentData.wind_gust}</Typography>
                  <Typography>pressure: {currentData.pressure}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>
        {/* </Box> */}
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
