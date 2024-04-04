import Header from "./Header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Outlet />
    </>
  );
};

export default MainLayout;
