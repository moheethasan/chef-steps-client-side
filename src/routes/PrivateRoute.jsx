import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center mt-40 z-10">
        <button className="btn loading">loading</button>
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default PrivateRoute;
