import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        console.log(`Scrolling to top for pathname: ${pathname}`);
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;