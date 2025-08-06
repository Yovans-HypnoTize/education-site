import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';


const ProtectedRoute = ({ element }: any) => {
  const token = Cookies.get('access_token');
  // const token = localStorage.getItem("access_token")
  return token ? element : <Navigate to="/" replace />;
};

export default ProtectedRoute;