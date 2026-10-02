import type { ReactNode } from "react";

type MainContentProps = {
  children: ReactNode;
};

function MainContent({ children }: MainContentProps) {
  return <main className="min-w-0 flex-1">{children}</main>;
}

export default MainContent;
