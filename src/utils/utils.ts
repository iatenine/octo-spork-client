export const extractDistricts = (members: any[]): number[] | "At-Large" => {
  const tempList: number[] = [];
  members.forEach((member) => {
    if (member?.district && !tempList.includes(member?.district))
      tempList.push(member.district);
  });
  tempList.sort((a, b) => a - b);
  const newList: string[] = tempList.map((elem) => elem.toString());
  if (newList.length === 1) return "At-Large";
  return tempList;
};

export const isAtLarge = (members: any[]): boolean =>
  members.some((elem) => elem?.district === "At-Large");
