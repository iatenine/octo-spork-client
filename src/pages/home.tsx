import React from "react";
import WhiteHouse from "./assets/images/whiteHouse.png";
import Stack from "react-bootstrap/Stack";
import Tutorial from "../component/Tutorial";
import StateSelect from "../component/StateSelect";
import DistrictSelect from "../component/DistrictSelect";
import { codeProps } from "../data/types";

function Home(props: codeProps) {
  return (
    <div className="center-wrapper">
      <Stack gap={0} className="col-md-5 mx-auto">
        <img src={WhiteHouse} alt="black icon of the white house" />
        <Stack direction="horizontal" className="col-12" gap={3}>
          <StateSelect {...props} />
          <Tutorial />
        </Stack>
        <Stack direction="horizontal" className="col-12">
          <DistrictSelect {...props} />
        </Stack>
      </Stack>
    </div>
  );
}

export default Home;
