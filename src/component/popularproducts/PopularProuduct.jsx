import { NavLink } from "react-router-dom";
import Green from "../../assets/images/Green.jpg";
import "./popularproducts.css"
import Beans1 from "../../assets/images/Beans1.jpg";
import Banana1 from "../../assets/images/Banana1.jpg";

const PopularProuduct = () => {
 
  return (
    <>
      <div className="py-20 w-[90%] mx-auto ">
      {/* <h1 className="">Overview</h1> */}
        <div className="products flex mx-auto flex-1 p-1">
          
          <div className="w-full sm:w-1/2 md:w-1/3 mb-4">
            <div className="flex">
              <div className="">
                <img src={Beans1} alt="Beans1"   className="w-[20rem] h-[10rem] rounded-3xl" />
              </div>
              <div className="pt-3 pl-4">
                <h3 className="font-bold">Beans Varieties</h3>
                <p className="text-sm text-gray-500">
                  Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                  odio
                </p>
                <p>
                  <NavLink to="*" className="text-sm hover:text-green-500">
                    Read More
                  </NavLink>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 mb-4">
            <div className="  flex">
              <div className=" ">
                <img src={Banana1} alt="Green" className="w-[20rem] h-[10rem] rounded-3xl" />
              </div>
              <div className="pt-3 pl-4">
                <h3 className="font-bold">Fruits Varieties</h3>
                <p className="text-sm text-gray-500">
                  Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                  odio
                </p>
                <p>
                  <NavLink to="*" className="text-sm hover:text-green-500">
                    Read More
                  </NavLink>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 mb-4">
            <div className="product-item-sm flex">
              <div className="">
                <img src={Green} alt="Green" className="w-[20rem] h-[10rem] rounded-3xl" />
              </div>
              <div className="pt-3 pl-4">
                <h3 className="font-bold">Vegetable Varieties</h3>
                <p className="text-sm text-gray-500">
                  Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                  odio
                </p>
                <p>
                  <NavLink to="*" className="text-sm hover:text-green-500">
                    Read More
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularProuduct;
