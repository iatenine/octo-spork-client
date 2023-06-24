import React from "react";
import WhiteHouse from "./assets/images/whiteHouse.png";
import Stack from "react-bootstrap/Stack";
import Tutorial from "../component/Tutorial";
import StateSelect from "../component/StateSelect";
import DistrictSelect from "../component/DistrictSelect";
import { codeProps } from "../data/types";
import Details from "./Details";

function Home(props: codeProps) {
  const resetSearch = () => {
    props.setStateCode("");
    props.setDistrict("");
  };
  return (
    <div className="center-wrapper">
      {(!props.district || props.members.length > 4) &&
      props.district !== "At-Large" ? (
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
      ) : (
        <Details members={props.members} resetDistrict={resetSearch} />
      )}
    </div>
  );
}

export default Home;
