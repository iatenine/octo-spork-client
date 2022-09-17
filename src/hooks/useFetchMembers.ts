import { useEffect, useState } from "react";

const url = process.env.SERVER_URL || "http://localhost:3001";
export const useFetchMembers = () => {
  const [members, setmembers] = useState<any[]>([]);
  const [stateCode, setStateCode] = useState<string>("");
  const [district, setDistrict] = useState<number>(0);

  useEffect(() => {
    const queryServer = async () => {
      const res = await fetch(`${url}/representatives?state=${stateCode}`);
      const body: Array<{ title: string; district: string; at_large: any }> =
        await res.json();
      const relevant = body.filter(
        (member: { title: string; district: string; at_large: any }) => {
          return (
            "Representative".toLowerCase() !== member.title.toLowerCase() ||
            parseInt(member.district) === district ||
            member.at_large
          );
        }
      );
      setmembers(relevant);
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
