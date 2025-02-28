import React from "react";
import { useTranslation } from "react-i18next";
import "./i18n"; // Import i18n config
import Layout from "./components/Layout";

const App: React.FC = () => {
  const { t, i18n } = useTranslation<"common">("common"); // Remove argument

  return (
    <Layout>
      <div>
        <h1 className="text-4xl font-semibold text-blue-600 mb-4">
          {t("welcome")}
        </h1>
        <button onClick={() => i18n.changeLanguage("en")}>English</button>
        <button onClick={() => i18n.changeLanguage("de")}>German</button>
      </div>
    </Layout>
  );
};

export default App;
