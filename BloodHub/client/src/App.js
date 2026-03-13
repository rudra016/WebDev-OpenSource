import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes";
import PublicRoutes from "./components/Routes/PublicRoutes";
import Donor from "./pages/dashboard/Donor";
import Hospitals from "./pages/dashboard/Hospitals";
import OrganisationPage from "./pages/dashboard/OrganisationPage";
import Consumer from "./pages/dashboard/Consumer";
import Donation from "./pages/dashboard/Donation";
import Analytics from "./pages/dashboard/Analytics";
import OrganisationList from "./pages/Admin/OrganisationList";
import DonorList from "./pages/Admin/DonorList";
import HospitalList from "./pages/Admin/HospitalList";
import AdminHome from "./pages/Admin/AdminHome";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <HomePage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/donor"
          element={
            <ProtectedRoutes>
              <Donor />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/hospital"
          element={
            <ProtectedRoutes>
              <Hospitals />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/analytics"
          element={
            <ProtectedRoutes>
              <Analytics />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/consumer"
          element={
            <ProtectedRoutes>
              <Consumer />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/donation"
          element={
            <ProtectedRoutes>
              <Donation />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/organisation"
          element={
            <ProtectedRoutes>
              <OrganisationPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoutes>
              <AdminHome />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/hospital-list"
          element={
            <ProtectedRoutes>
              <HospitalList />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/donor-list"
          element={
            <ProtectedRoutes>
              <DonorList />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/org-list"
          element={
            <ProtectedRoutes>
              <OrganisationList />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoutes>
              <Register />
            </PublicRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default App;
