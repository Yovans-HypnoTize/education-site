import { Outlet } from "react-router-dom";
import { CardProvider } from "../context/AuthCardContext";
import BackdropLoader from "../components/BackdropLoader";
import { useAppSelector } from "../hooks";

const LaunchLayout = () => {
  const backdrop = useAppSelector((state) => state.auth.backdrop);
  return (
    <CardProvider>
      <BackdropLoader open={backdrop} />
      <Outlet />
    </CardProvider>
  );
};

export default LaunchLayout;
