// src/components/Dashboard.tsx

import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContext"; // Import the custom hook
import { useTranslation } from "react-i18next";

const Dashboard: React.FC = () => {
  const { setCurrentPage } = useAppContext();
  const {t}= useTranslation();

  useEffect(() => {
    setCurrentPage("Dashboard");  // Update the current page state
  }, [setCurrentPage]);

  return <div>
    <div>
          <h1 className="text-4xl font-semibold text-blue-600 mb-4">
            {t("welcome")}
          </h1>
        </div>
  </div>;
};

export default Dashboard;
