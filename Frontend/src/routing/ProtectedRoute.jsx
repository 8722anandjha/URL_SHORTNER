import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
    
  const { isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  if (isLoading) return (
    <div className="w-full h-screen flex justify-center items-center">
        <h2 className=" text-2xl text-black">Loading...</h2>
    </div>
  );
  return isAuthenticated
    ? children
    :  <Navigate to="/auth/login" replace />;
};

export default ProtectedRoute;
