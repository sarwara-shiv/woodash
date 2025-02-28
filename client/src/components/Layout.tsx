import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

interface LayoutProps {
    children: ReactNode;
  }

const Layout: React.FC<LayoutProps>= ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="content">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
