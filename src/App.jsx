import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import Blogs from "./pages/blogs/Blogs";
import ContactUs from "./pages/contactUs/ContactUs";
import Service from "./pages/service/Service";
import About from "./component/about/About";
import Shop from "./pages/shop/Shop";
import Cart from "./component/cart/Cart";
import SignUp from "./pages/signUp/SignUp";
import MenuLink from "../src/component/menuLinks/MenuLinks";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signUp" element={<SignUp />} />

        <Route path="/menuLinks" element={<MenuLink />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
