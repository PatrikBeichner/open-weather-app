import React from 'react'
import { TextField, Select, FormControl, MenuItem, InputLabel, Box } from '@mui/material'
import { COUNTRIES } from './shared/countryCodes'
import { useState } from 'react'

export default function InputComponent() {
    const [country, setCountry] = useState('US')
    const [zip, setZip] = useState('')

    const handleCountry = (event) => {
        setCountry(event.target.value)
        console.log('this is country: ' + country)
    }
    const handleZip = (event) => {
        setZip(event.target.value)
        console.log('this is zip: ' + zip)
    }


  return (
    <>
    <Box component='form'>
        <TextField
          id='outlined-basic'
          label='zip/post code'
          variant='outlined'
          value={zip}
          onChange={handleZip}
        />
        <TextField
          id='outlined-select-country'
          select
          label='select'
          value={country}
          onChange={handleCountry}
          helperText='Select country'>
              {COUNTRIES.map((country) => (
                  <MenuItem key={country.countryCode} value={country.alpha2}>
                      {country.name}
                    </MenuItem>
              ))}
        </TextField>
    </Box>
    </>
        
  )
}
