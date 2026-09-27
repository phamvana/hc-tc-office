import type { ReactNode } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "./MainContent";

type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      <Sidebar />
      <MainContent>{children}</MainContent>
    </div>
  );
}

export default MainLayout;
