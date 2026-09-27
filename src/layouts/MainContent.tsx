import type { ReactNode } from "react";

type MainContentProps = {
  children: ReactNode;
};

function MainContent({ children }: MainContentProps) {
  return <main>{children}</main>;
}

export default MainContent;
