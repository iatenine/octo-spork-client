import React, {useEffect} from "react";
import { codeProps } from "../data/types";
import { extractDistricts } from "../utils/utils";

function DistrictSelect({ members, setDistrict, stateCode }: codeProps) {
  const placeholder: string = "Select your District";
  const uncertain: string = "Senators Only";
  const districtList = extractDistricts(members);

  const onChangeHandler = (e: { target: { value: any } }) => {
    const { value } = e.target;
    if(value === uncertain) {
      setDistrict("999999");
    }
    else if (e.target.value !== placeholder) setDistrict(e.target.value);
  };


  return (
    <>
      {members.length > 3 && districtList.length > 1 && (
        <select
          onChange={onChangeHandler}
          defaultValue={stateCode}
          className="col-11 rounded"
        >
          {Array.isArray(districtList)
            ? [placeholder, ...districtList, uncertain]?.map((elem, index) => {
                return (
                  <option key={index} value={elem}>
                    {elem}
                  </option>
                );
              })
            : null}
        </select>
      )}
    </>
  );
}

export default DistrictSelect;
