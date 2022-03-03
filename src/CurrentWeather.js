import React from 'react'
import { useState } from 'react';
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
import { CONDITIONS } from './shared/conditions';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Collapse } from '@mui/material';


export const ExpandMore = styled((props) =>{
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})
(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


export default function CurrentWeather({currentData, hourlyData}) {
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
      setExpanded(!expanded);
  };

    const iconUrl = 'http://openweathermap.org/img/wn/'

    if (currentData) {
    
        let currTemp = Math.round(currentData.temp)
        console.log(currTemp)
        let fLike = Math.round(currentData.feels_like)
        let icon = `${iconUrl}${currentData.weather[0].icon}@2x.png`

        let conSearch = `${currentData.weather[0].main}`
        let iconEle = CONDITIONS.filter(word => word.main.indexOf(conSearch) >= 0);
        console.log(conSearch)
        console.log(iconEle)

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
                        <CardActions>
                            <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more">
                                <ExpandMoreIcon />
                            <ExpandMore />
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
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
