import React from "react";
import { codeProps } from "../data/types";
import { extractDistricts } from "../utils/utils";

function DistrictSelect({ members, setDistrict, stateCode }: codeProps) {
  const placeholder: string = "Select your District";
  const districtList = extractDistricts(members);

  const onChangeHandler = (e: { target: { value: any } }) => {
    if (e.target.value !== placeholder) setDistrict(e.target.value);
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
            ? districtList?.map((elem, index) => {
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
