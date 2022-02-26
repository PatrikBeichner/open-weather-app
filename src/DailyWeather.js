import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function RenderCard({ daily }) {
    return(
        <div>
            <Card sx={{ maxWidth: 345, display: 'flex' }}>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {new Date(daily.dt * 1000).toLocaleTimeString('en-IN')}
                    </Typography>

                    <Typography gutterBottom variant="h5" component="div">
                        {daily.temp.day.toFixed(0)}&deg;F
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {daily.temp.day.toFixed(0)}&deg;F
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {daily.weather[0].main}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        feels like: {daily.feels_like.day.toFixed(0)}&deg;F
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        humidity: {daily.humidity.toFixed(0)}&#37;
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}


export default function DailyWeather({dailyData}) {
  
    const iconUrl = 'http://openweathermap.org/img/wn/'

    if (dailyData) {
        const cards = dailyData.map((daily, i) => {
            return (
                <div key={i}>
                    <RenderCard daily={daily} />
                </div>
            )
         })
        

     return (
         <Grid container spacing={2}>
                {cards}
         </Grid>
     )   
} else {
      return (
          <div>
              <h1>Loading...</h1>
          </div>
      )
  }
}




{/* <>
        
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
    </> */}