import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./Pages/1-LoginPage";
import UsersList from "./Pages/3-UsersList";
import HomePage from "./Pages/2-HomePage";
import Footer from "./Components/Footer";
// import USer from "./Pages/USer";
function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        // hideProgressBar={false}
        // newestOnTop={false}
        // closeOnClick
        // rtl={false}
        // pauseOnFocusLoss
        // draggable
        // pauseOnHover
      />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<HomePage />} />
        <Route path="/users" element={<UsersList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
