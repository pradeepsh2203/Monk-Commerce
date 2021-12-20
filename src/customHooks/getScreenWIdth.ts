import { useState, useEffect } from "react";

export const useScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const changeWindowSize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", changeWindowSize);
        return () => window.removeEventListener("resize", changeWindowSize);
    }, []);

    return screenWidth;
};
