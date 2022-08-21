import React from 'react';
import WhiteHouse from './assets/images/whiteHouse.png'
import Stack from 'react-bootstrap/Stack';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Home() {
  return (
    <>
      <div className='center-wrapper'>
        <Stack gap={0} className="col-md-5 mx-auto">
        <img src={WhiteHouse} alt='black icon of the white house'/>
        <FloatingLabel controlId="floatingInputGrid" label="Enter your location">
          <Form.Control type="city" placeholder='Chicago'/>
        </FloatingLabel>        </Stack>
      </div>
    </>
  );
}

export default Home;