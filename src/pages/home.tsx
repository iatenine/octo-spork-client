import React from 'react';
import WhiteHouse from './assets/images/whiteHouse.png'
import TextField from '@mui/material/TextField'
import Stack from 'react-bootstrap/Stack';


function Home() {
  return (
    <>
      <div className='center-wrapper'>
        <Stack gap={0} className="col-md-5 mx-auto">
        <img src={WhiteHouse} alt='black icon of the white house'/>
        <TextField fullWidth id="outlined-basic" label="Enter your location" variant="outlined" />
        </Stack>
      </div>
    </>
  );
}

export default Home;