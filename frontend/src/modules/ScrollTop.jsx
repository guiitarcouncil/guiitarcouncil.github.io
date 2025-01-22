import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on route change
  }, [pathname]);

  return null; // No UI rendered
}

export default ScrollToTop;
