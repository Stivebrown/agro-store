// import React from "react";
import { NavLink } from "react-router-dom";
import Beans1 from "../../assets/images/Beans1.jpg";
import Beans2 from "../../assets/images/Beans2.jpg";
import Beans3 from "../../assets/images/Beans3.jpg";
import Beans4 from "../../assets/images/Beans4.jpg";
import Beans5 from "../../assets/images/Beans5.jpg";
import Beans6 from "../../assets/images/Beans6.jpg";
import Banana1 from "../../assets/images/Banana1.jpg";
import Banana2 from "../../assets/images/Banana2.jpg";


import famer from "../../assets/images/famer.jpg";

const Blogs = () => {
  return (
    <>
      <div className="w-[90%] mx-auto mt-10 ">
        <div className="p-10 w-full">
          <div className="flex justify-between flex-wrap  mx-auto w-full">
            <div className="w-[20.5rem]">
              <NavLink to="*" className="h-[14rem] w-[20rem]">
                <img src={Beans1} alt="Beans1" className="rounded-sm h-[14rem] w-[20rem]" />
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
              <NavLink to="*" className="border-box">
                <img src={Banana1} alt="Banana1" className=" rounded-sm h-[14rem] w-[20rem]" />
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
                <img src={Beans3} alt="Image" className="   rounded-sm h-[14rem] w-[20rem]" />
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
                <img src={Beans5} alt="Image" className=" h-[14rem] w-[20rem] rounded-sm" />
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
                  src={Banana2}
                  alt="Image"
                  className="h-[14rem] w-[20rem] rounded-sm"
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
                <img src={Beans2} alt="Image" className="h-[14rem] w-[20rem] rounded-sm" />
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
