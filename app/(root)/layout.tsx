import { ReactNode } from "react";

const RootLayout = ({ childern }: { childern: ReactNode }) => {
  return <div>{childern}</div>;
};

export default RootLayout;
