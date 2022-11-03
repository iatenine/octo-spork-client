import React, { useEffect, useState } from "react";
import { codeProps } from "../data/types";

function DistrictSelect({
  members,
  setDistrict,
  stateCode,
}: codeProps) {
  const placeholder: string = "Select your District";
  const [districtList, setDistrictList] = useState([placeholder]);

  const onChangeHandler = (e: { target: { value: any } }) => {
    if (e.target.value !== placeholder) setDistrict(e.target.value);
  };

  useEffect(() => {
    const tempList: number[] = [];
    members.forEach((member) => {
      if (member?.district && !tempList.includes(member?.district))
        tempList.push(member.district);
    });
    tempList.sort((a, b) => a - b);
    const newList: string[] = tempList.map((elem) => elem.toString());
    if (newList.length === 1) setDistrict("At-Large");
    setDistrictList([placeholder, ...newList]);
  }, [members]);

  return (
    <>
      {members.length > 3 && districtList.length > 1 && (
        <select
          onChange={onChangeHandler}
          defaultValue={stateCode}
          className="col-11 rounded"
        >
          {districtList.map((elem, index) => {
            return (
              <option key={index} value={elem}>
                {elem}
              </option>
            );
          })}
        </select>
      )}
    </>
  );
}

export default DistrictSelect;
