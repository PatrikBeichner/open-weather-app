import {
    WeatherThunderstorm,
    WeatherDrizzle,
    WeatherRain,
    WeatherSnow,
    WeatherFog,
    
    WeatherCloudy } from '@styled-icons/fluentui-system-regular'


export const CONDITIONS = [
    {
        main: 'Thunderstorm',
        // @styled-icons/fluentui-system-regular/WeatherThunderstorm
        icon: <WeatherThunderstorm />
    },
    {
        main: 'Drizzle',
    //    @styled-icons/fluentui-system-regular/WeatherDrizzle
        icon: <WeatherDrizzle />
    },

    {
        main: 'Rain',
        // @styled-icons/fluentui-system-regular/WeatherRain
        icon: <WeatherRain />
    },
    {
        main: 'Snow',
        // @styled-icons/fluentui-system-regular/WeatherSnow
        icon: <WeatherSnow />
    },
    {
        main: 'Mist',
        icon: <WeatherFog />
    },
    {
        main: 'Smoke',
        icon: <WeatherFog />
    },
    {
        main: 'Haze',
        icon: <WeatherFog />
    },
    {
        main: 'Dust',
        icon: <WeatherFog />
    },
    {
        main: 'Fog',
        icon: <WeatherFog />
    },
    {
        main: 'Sand',
        icon: <WeatherFog />
    },
    {
        main: 'Dust',
        icon: <WeatherFog />
    },
    {
        main: 'Ash',
        icon: <WeatherFog />
    },
    {
        main: 'Squall',
        icon: <WeatherFog />
    },
    {
        main: 'Tornado',
        // @styled-icons/fluentui-system-regular/WeatherFog
        icon: <WeatherFog />
    },
    {
        main: 'Clear',
        // @styled-icons/fluentui-system-regular/WeatherSunny
        // @styled-icons/fluentui-system-regular/WeatherMoon
        iconDay: 'WeatherSunny',
        iconNight: 'WeatherMoon'
    },
    {
        main: 'Clouds',
        // @styled-icons/fluentui-system-regular/WeatherCloudy
        icon: <WeatherCloudy />
    }
]
