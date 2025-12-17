import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user");

  // If no user in localStorage, redirect to login
  if (!user) {
    return <Navigate to="/log-in" replace />;
  }

  // If user exists, show the dashboard
  return children;
}

export default ProtectedRoute;
