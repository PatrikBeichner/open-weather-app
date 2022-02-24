import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export default function DailyWeather({dailyData}) {
  
    const iconUrl = 'http://openweathermap.org/img/wn/'

    if (dailyData) {
    
        

    return (
    <>
        
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            <Grid item xs={8}>
            <Card sx={{ maxWidth: 345, display: 'flex' }}>
                <CardMedia
                    component="img"
                    height="140"
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
                </CardContent>
            </Card>
            </Grid>
            </Grid>
        </Box>
    </>
  )} else {
      return (
          <div>
              <h1>Loading...</h1>
          </div>
      )
  }
}
