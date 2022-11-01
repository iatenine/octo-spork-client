import { useEffect, useState } from "react";

const url = process.env.SERVER_URL || "https://octo-spork.herokuapp.com";

export const useFetchMembers = () => {
  const [members, setmembers] = useState<any[]>([]);
  const [stateCode, setStateCode] = useState<string>("");
  const [district, setDistrict] = useState<number | string>("");

  useEffect(() => {
    const queryServer = async () => {
      const districtParam =
        district !== "At-Large" && Number(district) !== 0
          ? `district=${district}`
          : ``;
      const res = await fetch(
        `${url}/representatives?state=${stateCode + districtParam}`
      );
      const body: Array<{ title: string; district: string; at_large: any }> =
        await res.json();
      setmembers(body);
    };
    queryServer();
  }, [stateCode, district]);

  return {
    members,
    stateCode,
    setStateCode,
    district,
    setDistrict,
  };
};
