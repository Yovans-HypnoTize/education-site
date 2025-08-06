import { useLocation } from "react-router-dom";
import { JSX, useEffect } from "react";

const ScrollToTopLayout = ({
  LayoutComponent,
}: {
  LayoutComponent: JSX.Element;
}) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <>{LayoutComponent}</>;
};

export default ScrollToTopLayout;
