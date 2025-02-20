import { NavLink } from "react-router-dom";
import Header from "../header/Header";
import WhyUs from "../whyus/WhyUs";
import Testimonial from "../testimonial/Testimonial";
import PopularProuduct from "../popularproducts/PopularProuduct";
import Hero from "../hero/Hero";
import { FaUserAlt, FaShoppingBasket} from "react-icons/fa";
// import "./MenuLinks";

const MenuLinks = () => {
  return (
    <>
      <Header />
      <NavLink to="/menuLinks">
        <div>
            <ul className=" flex flex-col lg:hidden md:hidden">
                <li className="menulist flex justify-center items-center h-12 border-b-2">
                <NavLink className="" to="/">
                  Home
                </NavLink>
                </li>
                <li className="menulist flex justify-center items-center h-12 border-b-2">
                <NavLink className="" to="/shop">
                  Shop
                </NavLink>
                </li>
                <li className="menulist flex justify-center items-center h-12 border-b-2">
                <NavLink className="" to="/about">
                  About
                </NavLink>
                </li>
                <li className="menulist flex justify-center items-center h-12 border-b-2">
                <NavLink className="" to="/service">
                  Service
                </NavLink>
                </li>
                <li className="menulist flex justify-center items-center h-12 border-b-2">
                <NavLink className="" to="/blogs">
                  Blog
                </NavLink>
                </li>
                <li className="menulist flex justify-center items-center h-12 border-b-2">
                <NavLink className="" to="/contact">
                  Contact
                </NavLink>
                </li>
                <li className="menulist flex justify-center items-center h-12 border-b-2">
                <NavLink className="" to="/signUp">
                  SignUp
                </NavLink>
                </li>
                <li className="menulist flex justify-center items-center h-12 border-b-2">
                <NavLink className="" to="*">
                  <FaUserAlt className="w-[1rem] h-[1rem]" />
                </NavLink>
                </li>
                <li className="menulist flex justify-center items-center h-12 border-b-2">
                <NavLink className="" to="/cart">
                  <FaShoppingBasket className="w-[1rem] h-[1rem]" />
                </NavLink>
                </li>

            </ul>
        </div>
      </NavLink>
      <Hero/>
      <PopularProuduct/>
      <WhyUs/>
      <Testimonial/>
    </>
  );
};

export default MenuLinks;
