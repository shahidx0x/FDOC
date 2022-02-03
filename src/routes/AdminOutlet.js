import { Navigate, Outlet } from "react-router-dom";

export default function AdminOutlet() {
  const isAdmin = localStorage.getItem("isAdm");
  return isAdmin ? <Outlet /> : <Navigate to="/login" />;
}
