 import { NavLink } from "react-router-dom";
import envelope from "../../assets/images/envelope-outline.svg";
// import sofa from "../../assets/images/sofa.png";
import { FaFacebook, FaPaperPlane, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
// import famer from "../../assets/images/famer.jpg";
import "./Footer.css";

// const date = () => {
//   setdate = new Date();
//   document.write(setdate.getFullYear())
//   return setdate;
// }
const Footer = () => {
  return (
    
    <>
      <footer className="py-5 bg-gradient-to-r from-green-400 to-green-600 shadow-lg text-black ">
        <div className="Footer-container relative px-4 ">
          {/* <div className="flex justify-end absolute top-[-5rem] left-[50rem] mt-7">
            <img src={famer} alt="Image" className="w-[15rem] h-[10rem] rounded-xl" />
          </div> */}

          <div className="flex">
            <div className="w-full lg:w-2/3 mb-4">
              <div className="subscription-form">
                <h3 className="flex items-center">
                  <span className="mr-2 ">
                    <img
                      src={envelope}
                      alt="Image"
                      className="w-7 h-7 hover:bg-green-500 text-green rounded p-0 m-0 text-green-300"
                    />
                  </span>
                  <span className="text-lg pb-1">Subscribe to Newsletter</span>
                </h3>

                <form action="#" className="flex flex-wrap mt-4">
                  <div className="footer-input mr-2">
                    <input
                      type="text"
                      className="p-2 w-[15rem] rounded border-none text-sm"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="footer-input mr-2">
                    <input
                      type="email"
                      className="p-2 w-[15rem] rounded border-none text-sm"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="">
                    <button className="bg-green-300 text-white p-3 rounded ">
                      <span ><FaPaperPlane className=" "/></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-5">
            <div>
              <div className="mb-4 footer-logo-wrap">
                <NavLink to="/" className="footer-logo text-3xl font-bold mt-3 text-green-300">
                  Agro<span className="text-green-200">-</span>Store
                </NavLink>
              </div>
              {/* p had a text-gray-500 */}
              <p className="mb-4 text-sm text-black leading-loose">
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant
              </p>

              <ul className="list-none flex space-x-4">
                <li>
                  <NavLink to="*" className="text-green-300 text-xl">
                    <span className="FaFacebook"><FaFacebook className="hover:text-green-700 rounded-lg"/></span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="*" className="text-green-300 text-xl">
                    <span className=""><FaTwitter className="hover:text-green-500 rounded-lg"/></span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="*" className="text-green-300 text-xl">
                    <span className="fa fa-brands fa-instagram "><FaInstagram className="hover:text-green-500 rounded"/></span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="*" className="text-green-300 text-xl">
                    <span className="fa fa-brands fa-linkedin"><FaLinkedin className="hover:text-green-500 rounded "/></span>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-sm grid grid-cols-4 gap-15 w-[40rem] mt-[3.3rem]">
                <div>
                  <ul className="list-none">
                    <li className="mb-4">
                      <NavLink to="/about" className="text-black">
                        About us
                      </NavLink>
                    </li>
                    <li className="mb-4">
                      <NavLink to="/service" className="text-black">
                        Services
                      </NavLink>
                    </li>
                    <li className="mb-4">
                      <NavLink to="/blogs" className="text-black">
                        Blog
                      </NavLink>
                    </li>
                    <li className="mb-4">
                      <NavLink to="/contact" className="text-black">
                        Contact us
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div className="">
                  <ul className="list-none">
                    <li className="mb-4">
                      <NavLink to="*" className="text-black">
                        Support
                      </NavLink>
                    </li>
                    <li className="mb-4">
                      <NavLink to="*" className="text-black">
                        Knowledge base
                      </NavLink>
                    </li>
                    <li className="mb-4">
                      <NavLink to="*" className="text-black">
                        Live chat
                      </NavLink>
                    </li>
                  </ul>
                </div>

                {/* <div>
                  <ul className="list-none">
                    <li className="mb-4">
                      <NavLink to="*" className="text-black">
                        Jobs
                      </NavLink>
                    </li>
                    <li className="mb-4">
                      <NavLink to="*" className="text-black">
                        Our team
                      </NavLink>
                    </li>
                    <li className="mb-4">
                      <NavLink to="*" className="text-black">
                        Leadership
                      </NavLink>
                    </li>
                    <li className="mb-4">
                      <NavLink to="*" className="text-black">
                        Privacy Policy
                      </NavLink>
                    </li>
                  </ul>
                </div> */}

                <div>
                  <ul className="list-none">
                    <li className="mb-4">
                      <NavLink to="*" className="text-black">
                        Bananas
                      </NavLink>
                    </li>
                    <li className="mb-4">
                      <NavLink to="*" className="text-black">
                        Beans
                      </NavLink>
                    </li>
                    <li className="mb-4">
                      <NavLink to="*" className="text-black">
                        Food Crops
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
           </div>

          <div className="copyright border-t border-green-700 pt-4 w-[90%]">
            <div className="flex justify-between">
              <div>
                <p className="mb-2 text-center text-black">
                  Copyright &copy;
                   <span></span>
                  All Rights Reserved. &mdash; Designed with love by {" "}
                  <NavLink to="/" className="text-green-950 hover:text-green-700">
                    StiveCode.co
                  </NavLink>
                </p>
              </div>

              <div>
                <ul className="list-none flex space-x-1">
                  <li>
                    <NavLink to="*" className="text-black">
                      Terms &amp; Conditions
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="*" className="text-black">
                      Privacy Policy
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
