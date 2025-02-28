import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Header: React.FC = () => {
    const { isSidebarOpen, setIsSidebarOpen, pageTitle } = useAppContext();

    // Function to toggle sidebar for small screens
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Adjust sidebar state based on screen size
    useEffect(() => {
        // Function to check screen width and adjust sidebar state
        const handleResize = () => {
            if (window.innerWidth >= 640) {  
                // Automatically close sidebar for larger screens
                setIsSidebarOpen(true);
            } else {
                // Automatically open sidebar for smaller screens
                setIsSidebarOpen(false);
            }
        };

        // Initial check on component mount
        handleResize();

        // Add event listener to handle resize
        window.addEventListener("resize", handleResize);

        // Cleanup event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [setIsSidebarOpen]); // Empty dependency array ensures this runs on mount

    return (
        <header
            className={`bg-white border-b-2 p-2 flex  content-center align-center items-center transition-all duration-300 ease ${
                isSidebarOpen ? "ml-[200px]" : "ml-[0px]"
            }`}
        >
            <div
                onClick={toggleSidebar}
                className={`cursor-pointer text-2xl mr-1 transition-all duration-100 ease hover:bg-primary-light`}
            >
                {isSidebarOpen ? <IoMdClose /> : <IoMdMenu />}
            </div>
            <h1 className="font-bold text-gray-400 text-xl">{pageTitle}</h1>
        </header>
    );
};

export default Header;
