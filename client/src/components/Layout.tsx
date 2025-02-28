import React, { ReactNode, useEffect } from "react";
import { useAppContext } from "../context/AppContext"; // Import the custom hook
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { useTranslation } from "react-i18next";
import TopMenuBar from "./TopMenuBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pageTitle, setPageTitle, currentPage, setCurrentPage, language, setLanguage } = useAppContext();  // Access context state
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);  // Update language state
  };

  useEffect(() => {
    // Example: Set page title based on the current page
    if (currentPage === "Dashboard") {
      setPageTitle("Dashboard Page");
    } else {
      setPageTitle("Other Page");
    }
  }, [currentPage, setPageTitle]);

  return (
    <div className="layout">
      <TopMenuBar title="My App" />
      <Header />
      <div className="main-content mt-16"> {/* Add margin-top to prevent overlap */}
        <Sidebar />
        <main className="content">
          <div>
            <h2>{pageTitle}</h2> {/* Display the current page title */}
            <button onClick={() => { i18n.changeLanguage("en"); handleLanguageChange("en"); }}>English</button>
            <button onClick={() => { i18n.changeLanguage("de"); handleLanguageChange("de"); }}>German</button>
          </div>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
