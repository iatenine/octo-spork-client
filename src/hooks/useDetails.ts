import { MemberType } from "../data/types";

export const useDetails = () => {
  const getType: (t: string) => MemberType = (title: string) => {
    if (title.toLowerCase().includes("delegate")) return "Delegate";
    if (title.toLowerCase().includes("representative")) return "Representative";
    return "Senator";
  };

  const getBorder: (title: string) => string = (t) => {
    const title = getType(t);
    const borderColor = {
      Delegate: "border-secondary",
      Senator: "border-warning",
      Representative: "border-secondary",
    };
    return `border border-5 ${borderColor[title]}`;
  };

  return {
    getBorder,
  };
};
