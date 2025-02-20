// import React from "react";
import { NavLink } from "react-router-dom";
// import Bow2 from "../assets/images/bowl-2.png";
// import Bow3 from "../assets/images/bowl-3.png";
import famer from "../../assets/images/famer.jpg";
import Header from "../../component/header/Header";

const Blogs = () => {
  return (
    <>
      <Header />
      <div className="w-[90%] mx-auto mt-10 ">
        <div className="p-10 w-full">
          <div className="flex justify-between flex-wrap  mx-auto w-full">
            <div className="w-[20.5rem] ">
              <NavLink to="*" className="w-full">
                <img src={famer} alt="Image" className=" w-full rounded-sm" />
              </NavLink>
              <div className="mt-3 text-center">
                <h3 className="font-bold">
                  <NavLink to="*">First Time Home Owner Ideas</NavLink>
                </h3>
                <div className="meta text-sm">
                  <span>
                    by{" "}
                    <NavLink to="*" className="font-bold text-green-500">
                      Kristin Watson
                    </NavLink>
                  </span>{" "}
                  <span>
                    on{" "}
                    <NavLink to="*" className="font-bold text-green-500">
                      Dec 19, 2021
                    </NavLink>
                  </span>
                </div>
              </div>
            </div>

            <div className="w-[20.5rem] ">
              <NavLink to="*" className=" ">
                <img src={famer} alt="Image" className=" w-full rounded-sm" />
              </NavLink>
              <div className="mt-3 text-center">
                <h3 className="font-bold">
                  <NavLink to="*">How To Keep Your Furniture Clean</NavLink>
                </h3>
                <div className="meta text-sm">
                  <span>
                    by{" "}
                    <NavLink to="*" className="font-bold text-green-500">
                      Robert Fox
                    </NavLink>
                  </span>{" "}
                  <span>
                    on{" "}
                    <NavLink to="*" className="font-bold text-green-500">
                      Dec 15, 2021
                    </NavLink>
                  </span>
                </div>
              </div>
            </div>

            <div className="w-[20.5rem]  ">
              <NavLink to="*" className=" ">
                <img src={famer} alt="Image" className=" w-full rounded-sm" />
              </NavLink>
              <div className="mt-3 text-center">
                <h3 className="font-bold">
                  <NavLink to="*">
                    Small Space Furniture Apartment Ideas
                  </NavLink>
                </h3>
                <div className="meta text-sm">
                  <span>
                    by{" "}
                    <NavLink to="*" className="font-bold text-green-500">
                      Kristin Watson
                    </NavLink>
                  </span>{" "}
                  <span>
                    on{" "}
                    <NavLink to="*" className="font-bold text-green-500">
                      Dec 12, 2021
                    </NavLink>
                  </span>
                </div>
              </div>
            </div>

            <div className="w-[20.5rem] mt-10">
              <NavLink to="*" className=" ">
                <img src={famer} alt="Image" className=" w-full rounded-sm" />
              </NavLink>
              <div className="mt-3 text-center">
                <h3 className="font-bold">
                  <NavLink to="*">First Time Home Owner Ideas</NavLink>
                </h3>
                <div className="meta text-sm">
                  <span>
                    by{" "}
                    <NavLink to="*" className="font-bold text-green-500">
                      Kristin Watson
                    </NavLink>
                  </span>{" "}
                  <span>
                    on{" "}
                    <NavLink to="*" className="font-bold text-green-500">
                      Dec 19, 2021
                    </NavLink>
                  </span>
                </div>
              </div>
            </div>

            <div className="w-[20.5rem] mt-10">
              <NavLink to="*" className=" ">
                <img
                  src={famer}
                  alt="Image"
                  className=" w-full rounded-[1rem]"
                />
              </NavLink>
              <div className="mt-3 text-center">
                <h3 className="font-bold">
                  <NavLink to="*">How To Keep Your Furniture Clean</NavLink>
                </h3>
                <div className="meta text-sm">
                  <span>
                    by{" "}
                    <NavLink to="*" className="font-bold text-green-500">
                      Robert Fox
                    </NavLink>
                  </span>{" "}
                  <span>
                    on{" "}
                    <NavLink to="*" className="font-bold text-green-500">
                      Dec 15, 2021
                    </NavLink>
                  </span>
                </div>
              </div>
            </div>

            <div className="w-[20.5rem] mt-10">
              <NavLink to="*" className=" ">
                <img src={famer} alt="Image" className=" w-full rounded-sm" />
              </NavLink>
              <div className="mt-3 text-center">
                <h3 className="font-bold">
                  <NavLink to="*">
                    Small Space Furniture Apartment Ideas
                  </NavLink>
                </h3>
                <div className="meta text-sm">
                  <span>
                    by{" "}
                    <NavLink to="*" className="font-bold text-green-500">
                      Kristin Watson
                    </NavLink>
                  </span>{" "}
                  <span>
                    on{" "}
                    <NavLink to="*" className="font-bold text-green-500">
                      Dec 12, 2021
                    </NavLink>
                  </span>
                </div>
              </div>
            </div>
            {/* 
            <div className="w-[20.5rem] mt-10">
              <NavLink to="*" className=" ">
                <img src={famer} alt="Image" className=" w-full rounded-[1rem]" />
              </NavLink>
              <div className="mt-3 text-center">
                <h3 className="font-bold">
                  <NavLink to="*">First Time Home Owner Ideas</NavLink>
                </h3>
                <div className="meta text-sm">
                  <span>
                    by <NavLink to="*" className="font-bold text-green-500">Kristin Watson</NavLink>
                  </span>{" "}
                  <span>
                    on <NavLink to="*" className="font-bold text-green-500">Dec 19, 2021</NavLink>
                  </span>
                </div>
              </div>
            </div> */}

            {/* <div className="w-[20.5rem] mt-10">
              <NavLink to="*" className=" ">
                <img src={famer} alt="Image" className=" w-full rounded-[1rem]" />
              </NavLink>
              <div className="mt-3 text-center">
                <h3 className="font-bold">
                  <NavLink to="*">How To Keep Your Furniture Clean</NavLink>
                </h3>
                <div className="meta text-sm">
                  <span>
                    by <NavLink to="*" className="font-bold text-green-500">Robert Fox</NavLink>
                  </span>{" "}
                  <span>
                    on <NavLink to="*" className="font-bold text-green-500">Dec 15, 2021</NavLink>
                  </span>
                </div>
              </div>
            </div> */}

            {/* <div className="w-[20.5rem] mt-10">
              <NavLink to="*" className=" ">
                <img src={famer} alt="Image" className=" w-full rounded-[1rem]"/>
              </NavLink>
              <div className="mt-3 text-center">
                <h3 className="font-bold ">
                  <NavLink to="*">
                    Small Space Furniture Apartment Ideas
                  </NavLink>
                </h3>
                <div className="meta text-sm">
                  <span>
                    by <NavLink to="*" className="font-bold text-green-500">Kristin Watson</NavLink>
                  </span>{" "}
                  <span>
                    on <NavLink to="*" className="font-bold text-green-500">Dec 12, 2021</NavLink>
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
