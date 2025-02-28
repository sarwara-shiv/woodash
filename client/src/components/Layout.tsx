import React, { useState } from "react";
import { useAppContext } from "../context/AppContext"; // Import the custom hook
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import TopMenuBar from "./TopMenuBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const {isSidebarOpen } = useAppContext();

  return (
    <div className="layout h-screen flex flex-col">
      {/* Top Menu Bar */}
      <TopMenuBar />

      {/* Header (Fixed Below Top Menu Bar) */}
      <Header />

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-y-auto mb-8">
        {/* Sidebar Toggle Button */}

        {/* Sidebar (Conditionally render based on state) */}
        {/* {isSidebarOpen && (
        )} */}
        <Sidebar /> 

        {/* Main Content */}
        <main className={`flex-1 ml-64 mt-5 mb-14 px-2 transition-all ease duration-100 ${isSidebarOpen ? "ml-[200px]" : "ml-[0px]"}`}>
          {children}
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>120</p>
         
        </main>
      </div>

      {/* Footer (Fixed at Bottom) */}
      <Footer/>
    </div>
  );
};

export default Layout;
