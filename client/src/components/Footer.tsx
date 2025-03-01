import React from "react";

const Footer: React.FC = () => {
  return (
    <footer  className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-2 text-xs" >
      <p>© {new Date().getFullYear()} {process.env.REACT_APP_NAME} @ {process.env.REACT_APP_COMPANY_NAME}</p> 
    </footer>
  );
};

export default Footer;
