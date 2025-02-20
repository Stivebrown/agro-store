import { NavLink } from "react-router-dom";
import Green from "../../assets/images/Green.jpg";


const Blog = () => {
  return (
    <>
      <div className="w-[90%] py-20 mx-auto">
        <div className="mx-auto px-4 container">
          <div className="flex mb-5">
            <div className="w-1/2 mb-5 ">
              <h2 className="text-3xl pl-2 m-0">Recent Blog</h2>
            </div>
            <div className="w-1/2 text-right pr-2">
              <NavLink to="/blogs" className="text-green-500">
                View All Posts
              </NavLink>
            </div>
          </div>

          <div className="flex">
            <div className="w-full sm:w-1/2 md:w-1/3 mb-4">
              <div className="">
                <NavLink to="*" className=" ">
                  <img src={Green} alt="Image" className="w-[19.5rem] hover:opacity-80 transition:ease-in duration-300 rounded-sm mr-2 mx-auto"  />
                </NavLink>
                <div className="leading-loose text-center">
                  <h3>
                    <NavLink to="*" className="text-[1rem] font-bold">
                      First Time Home Owner Ideas
                    </NavLink>
                  </h3>
                  <div className="text-[0.8rem]">
                    <span className=" ">
                      by{" "}
                      <NavLink to="*" className="text-green-500 font-bold">
                      Laclong Stive
                      </NavLink>
                    </span>{" "}
                    <span>
                      on{" "}
                      <NavLink to="*" className="text-green-500 font-bold">
                        Dec 8, 2024
                      </NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;