import "./Header.css";
import { NavLink } from "react-router-dom";
import { FaUserAlt, FaShoppingBasket, FaBars } from "react-icons/fa";
import { useState } from "react";

// import cartbasket from "../assets/images/cart.svg";
// import user from "./assets/images/user.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-green-700 hover:text-white-700 p-2 transition ease-in-out delay-100 rounded-md"
      : "hover:text-white-700 p-2 transition ease-in-out delay-100 hover:text-green-700 w-[4rem]";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // {
  //   isMenuOpen && (
  //     <div className="menuLis">
  //       <ul className="text-white">
  //         <li className="navlink">
  //           <NavLink className="" to="/">
  //             Home
  //           </NavLink>
  //         </li>
  //         <li className="navlink">
  //           <NavLink className="" to="/shop">
  //             Shop
  //           </NavLink>
  //         </li>
  //       </ul>
  //     </div>
  //   );
  // };

  return (
    <section className="headerBg bg-green-600 text-white shadow-lg flex flex-row ">
      <nav className="   navLinks h-[3rem]">
        <NavLink to="/menuLinks">
        <FaBars size={35} className="menu" onClick={toggleMenu} />
        </NavLink>
        

        <div className=" w-[100%] flex justify-between">
          <NavLink
            className="logo text-3xl p-1 ml-2 pl-5   font-bold w-[35%]"
            to="/"
          >
            Agro<span className="text-green-400">-</span>Store
          </NavLink>
          <div className="md:flex w-[50%] mx-0 flex flex-row justify-end" id="">
            <ul className="text-white flex flex-row  items-center mt-[-10px] ">
              <li className="navlink">
                <NavLink className={linkClass} to="/">
                  Home
                </NavLink>
              </li>
              <li className="navlink">
                <NavLink className={linkClass} to="/shop">
                  Shop
                </NavLink>
              </li>
              <li className="navlink">
                <NavLink className={linkClass} to="/about">
                  About
                </NavLink>
              </li>
              <li className="navlink">
                <NavLink className={linkClass} to="/service">
                  Services
                </NavLink>
              </li>
              <li className="navlink">
                <NavLink className={linkClass} to="/blogs">
                  Blog
                </NavLink>
              </li>
              <li className="navlink">
                <NavLink className={linkClass} to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="navlink">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-green-700 hover:text-white-400 p-2 transition ease-in-out delay-100  mr-[1rem] rounded-md"
                      : "hover:bg-green-700 p-2 transition ease-in-out delay-100 hover:text-white-700 mr-[1em] rounded-md"
                  }
                  to="/signUp"
                >
                  SignUp
                </NavLink>
              </li>
              <li className="navlink">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "  hover:text-white-400 p-2 transition ease-in-out delay-100 hover:text-green-700 mr-[1rem] "
                      : "hover:text-white-400 p-2 transition ease-in-out delay-100 hover:text-green-700 mr-[0.5rem]"
                  }
                  to="/admin"
                >
                  <FaUserAlt className="w-[1rem] h-[1rem]" />
                </NavLink>
              </li>
              <li className="w-[4rem] navlink">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "hover:text-white-700 p-2 transition ease-in-out delay-100 hover:text-green-700  w-[5rem]"
                      : "hover:text-white-400 p-2 transition ease-in-out delay-100 hover:text-green-700 w-[6rem]"
                  }
                  to="/cart"
                >
                  <FaShoppingBasket className="w-[2rem] h-[1.2rem]" />
                </NavLink>
              </li>
            </ul>
            {/* className={({isActive}) => (isActive ? 'active-link' : '')} */}
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
