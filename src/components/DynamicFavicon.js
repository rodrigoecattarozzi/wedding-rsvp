import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const DynamicFavicon = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const prefersDarkMode = window.matchMedia(
            "(prefers-color-scheme: dark)"
        );
        setDarkMode(prefersDarkMode.matches);

        const handleChange = (event) => {
            setDarkMode(event.matches);
        };

        prefersDarkMode.addEventListener("change", handleChange);

        return () => {
            prefersDarkMode.removeEventListener("change", handleChange);
        };
    }, []);

    return (
        <Helmet>
            <link
                rel="icon"
                href={darkMode ? "/wedding-rings.ico" : "/groom-and-bride.ico"}
            />
        </Helmet>
    );
};

export default DynamicFavicon;
