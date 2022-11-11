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

export const getMemberVotes = async (
  url: string,
  memberId: string
): Promise<any> => {
  try {
    const endpoint: string = `/representatives/${memberId}`;
    const res = await await (await fetch(`${url + endpoint}`)).json();
    return res;
  } catch (error) {
    console.error({ error });
  }
};
