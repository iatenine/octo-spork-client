import React from "react";
import { states } from "../data/states";
import { codeProps } from "../data/types";

function StateSelect({
  members,
  setStateCode,
  setDistrict,
  stateCode,
}: codeProps) {
  const placeholder: string = "Select your State/Territory code";
  const stateList = [placeholder, ...states].map((state) => {
    return (
      <option key={state} value={state}>
        {state}
      </option>
    );
  });

  const onChangeHandler = (e: { target: { value: any } }) => {
    setStateCode(e.target.value);
    setDistrict("");
  };

  return (
    <>
      <select
        onChange={onChangeHandler}
        defaultValue={stateCode}
        className="col-11 rounded"
      >
        {stateList}
      </select>
    </>
  );
}

export default StateSelect;
