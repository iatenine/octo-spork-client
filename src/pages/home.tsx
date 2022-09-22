import React from "react";
import WhiteHouse from "./assets/images/whiteHouse.png";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Tutorial from "../component/Tutorial";

function Home() {
  return (
    <div className="center-wrapper">
      <Stack gap={0} className="col-md-5 mx-auto">
        <img src={WhiteHouse} alt="black icon of the white house" />
        <Stack direction="horizontal" gap={3}>
          <Form.Control type="city" placeholder="Enter Your Zipcode" />
          <Tutorial />
        </Stack>
      </Stack>
    </div>
  );
}

export default Home;
