import type { ReactNode } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "./MainContent";

type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="md:flex">
        <Sidebar />
        <MainContent>{children}</MainContent>
      </div>
    </div>
  );
}

export default MainLayout;
