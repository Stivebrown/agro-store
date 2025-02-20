import { Outlet } from "react-router-dom";

import Footer from "../component/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
