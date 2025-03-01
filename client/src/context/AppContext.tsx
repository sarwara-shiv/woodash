import React, { createContext, useState, ReactNode, useContext } from "react";

// Define the types for the state
interface AppContextType {
  pageTitle: string;
  setPageTitle: (title: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  isUserAuthenticated: boolean;
  setIsUserAuthenticated: (isAuthenticated: boolean) => void;
  isLicenseValid: boolean;
  setIsLicenseValid: (licenseStatus: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
  language: string;
  setLanguage: (lang: string) => void;
}

// Initial values for the context
const defaultState: AppContextType = {
  pageTitle: "Home",
  setPageTitle: () => {},
  isSidebarOpen: true,
  setIsSidebarOpen: () => {},
  isUserAuthenticated: true,
  setIsUserAuthenticated: () => {},
  isLicenseValid: true,
  setIsLicenseValid: () => {},
  currentPage: "Dashboard",
  setCurrentPage: () => {},
  language: "en",
  setLanguage: () => {},
};

// Create the context
const AppContext = createContext<AppContextType>(defaultState);

// Create a provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pageTitle, setPageTitle] = useState<string>("Home");
  const [currentPage, setCurrentPage] = useState<string>("Dashboard");
  const [language, setLanguage] = useState<string>("en");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState<boolean>(true);
  const [isLicenseValid, setIsLicenseValid] = useState<boolean>(true);


  return (
    <AppContext.Provider
      value={{
        pageTitle,
        setPageTitle,
        isUserAuthenticated,
        setIsUserAuthenticated,
        isLicenseValid,
        setIsLicenseValid,
        isSidebarOpen,
        setIsSidebarOpen,
        currentPage,
        setCurrentPage,
        language,
        setLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context in any component
export const useAppContext = () => {
  return useContext(AppContext);
};