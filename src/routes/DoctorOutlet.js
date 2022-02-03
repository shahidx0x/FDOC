import { Navigate, Outlet } from "react-router-dom";

export default function DoctorOutlet() {
  const isDoc = localStorage.getItem("isDoc");
  return isDoc ? <Outlet /> : <Navigate to="/login" />;
}
