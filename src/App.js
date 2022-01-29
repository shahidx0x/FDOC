import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Navigation from "./shared/Navigation/Navigation";
import Registration from "./pages/Registration/Registration";
import Home from "./pages/Home/Home";
import { useState } from "react";
import { useEffect } from "react";
import DoctorsList from "./pages/DoctorsList/DoctorsList";
import Login from "./pages/Registration/Login";
import Test from "./pages/Test";
import PrivateRoute from "./routes/PrivateRoute/PrivateRoute";
import Appoinment from "./pages/Appoinment/Appoinment";
import MyAppoinment from "./pages/MyAppoinment/MyAppoinment";
import DoctorRoute from "./routes/DoctorRoute/DoctorRoute";
import Docx from "./usersx/Doctor/Docx";
import AddNewDoctor from "./usersx/Admin/AddNewDoctor/AddNewDoctor";
import AdminRoute from "./routes/AdminRoute/AdminRoute";
import ManageDoctor from "./usersx/Admin/ManageDoctor/ManageDoctor";
import PatientDetails from "./usersx/Admin/PatientDetails/PatientDetails";
import MultiUpload from "./pages/MultiUpload/MultiUpload";
import Loading from "./component/Loading/Loading";
import ViewPresData from "./usersx/Doctor/ViewPresData";
import CreatePrescription from "./usersx/Doctor/CreatePrescription";
import EMPmain from "./pages/EmedicPrescription/EMPmain";

function App() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);
  return (
    <div className={load ? "App" : ""}>
      {load ? (
        // <RingLoader color={"#9013FE"} loading={load} size={150} />
        <Loading />
      ) : (
        <AuthProvider>
          <Router>
            <Navigation />

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/doctors">
                <DoctorsList />
              </Route>
              <Route path="/emedic">
                <Test />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/registration">
                <Registration></Registration>
              </Route>
              <Route path="/addnewdoctor">
                <AddNewDoctor />
              </Route>
              <PrivateRoute path="/appoinment/:pakId">
                <Appoinment />
              </PrivateRoute>
               <PrivateRoute path="/empres">
                <EMPmain />
              </PrivateRoute>
              <PrivateRoute path="/myappoinment">
                <MyAppoinment />
              </PrivateRoute>
              <PrivateRoute path="/myprescription">
                <MultiUpload />
              </PrivateRoute>
              <DoctorRoute path="/docdash">
                <Docx />
              </DoctorRoute>
              <DoctorRoute path="/create-prescription/:doctor/:mail/:name/:id">
                <CreatePrescription />
              </DoctorRoute>
              <DoctorRoute path="/viewpdata/:mail/:name">
                <ViewPresData />
              </DoctorRoute>
              <AdminRoute path="/mngdoctors">
                <ManageDoctor />
              </AdminRoute>
              <AdminRoute path="/pdetails">
                <PatientDetails />
              </AdminRoute>
            </Switch>
          </Router>
        </AuthProvider>
      )}
    </div>
  );
}

export default App;
