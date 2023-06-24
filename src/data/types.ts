export type codeProps = {
  stateCode: string;
  setStateCode: Function;
  district: number | "At-Large" | "";
  setDistrict: Function;
  members: Array<any>;
};

export type MemberType = "Senator" | "Representative" | "Delegate";
