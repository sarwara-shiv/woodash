import React from "react";
import { useTranslation } from "react-i18next";
import "./i18n"; // Import i18n config
import Layout from "./components/Layout";
import { AppProvider } from "./context/AppContext";
import Dashboard from "./components/Dashboard";

const App: React.FC = () => {
  const { t, i18n } = useTranslation<"common">("common"); // Remove argument

  return (
    <AppProvider>
      <Layout>
        <Dashboard />
      </Layout>
    </AppProvider>
  );
};

export default App;
