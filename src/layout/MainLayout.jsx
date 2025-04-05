import { Outlet } from "react-router-dom";

import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
