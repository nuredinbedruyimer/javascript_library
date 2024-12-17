import { ReactNode } from "react";

interface SectioonProps {
  children: ReactNode;
}
const Section = ({ children }: SectioonProps) => {
  return <div>{children}</div>;
};

export default Section;
