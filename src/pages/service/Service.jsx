import bag from "../../assets/images/bag.svg";
import truck from "../../assets/images/truck.svg";
import Support from "../../assets/images/support.svg";
import Return from "../../assets/images/return.svg";
import Header from "../../component/header/Header";
import "./Service.css";

const Service = () => {
  return (
    <>
      <Header />

      <div className="w-[90%] mx-auto mt-[5rem]">
        <div className="service-Wrapper grid grid-cols-4 mr-3 leading-loose mb-8">
          <div className="p-1 m-2  ">
            <div className=" ">
              <img
                src={truck}
                alt="Fast & Free Shipping"
                className="w-10 h-10 z-index-1"
              />
              {/* <p className="bg-green-500 opacity-70 w-6 h-6 rounded-xl absolute top-[45rem] left-[6rem] z-index-0"></p> */}
            </div>
            <h3 className="text-sm font-bold pb-2 pt-2">
              Fast &amp; Free Shipping
            </h3>
            <p className="text-sm">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>

          <div className="p-1 m-2 ">
            <div className="">
              <img
                src={bag}
                alt="Easy to Shop"
                className="w-10 h-10 z-index-1"
              />
              {/* <p className="bg-green-500 opacity-70 w-6 h-6 rounded-xl absolute top-[55rem] left-[6rem] z-index-0"></p> */}
            </div>
            <h3 className="text-sm font-bold pb-2 pt-2">Easy to Shop</h3>
            <p className="text-sm">
            Also secure payments, pay seamlessly via <span className="font-bold">Mobile, Bank Transfer, or PayPay</span>
            </p>
          </div>

          <div className="p-1 m-2">
            <div className=" ">
              <img src={Support} alt="24/7 Support" className="w-10 h-10" />
              {/* <p className="bg-green-500 opacity-70 w-6 h-6 rounded-xl absolute top-[45rem] left-[23.2rem] z-index-0"></p> */}
            </div>
            <h3 className="text-sm font-bold pb-2 pt-2">24/7 Support</h3>
            <p className="text-sm">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>

          <div className="p-1 m-2">
            <div className=" ">
              <img
                src={Return}
                alt="Hassle Free Returns"
                className="w-10 h-10"
              />
              {/* <p className="bg-green-500 opacity-70 w-6 h-6 rounded-xl absolute top-[55rem] left-[23.2rem] z-index-0"></p> */}
            </div>
            <h3 className="text-sm  font-bold pb-2 pt-2">
              Hussle Free Returns
            </h3>
            <p className="text-sm">
            Hussle-free shipping to North America. Malesuada nullam ac aliquet
            velit aliquam vulputate.
            </p>
          </div>
          <div className="p-1 m-2">
            <div className=" ">
              <img
                src={truck}
                alt="Fast & Free Shipping"
                className="w-10 h-10 z-index-1"
              />
              {/* <p className="bg-green-500 opacity-70 w-6 h-6 rounded-xl absolute top-[45rem] left-[40.3rem] z-index-0"></p> */}
            </div>
            <h3 className="text-sm font-bold pb-2 pt-2">
              Fast &amp; Free Shipping
            </h3>
            <p className="text-sm">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>

          <div className="p-1 m-2 ">
            <div className="">
              <img
                src={bag}
                alt="Easy to Shop"
                className="w-10 h-10 z-index-1"
              />
              {/* <p className="bg-green-500 opacity-70 w-6 h-6 rounded-xl absolute top-[54.9rem] left-[40.3rem] z-index-0"></p> */}
            </div>
            <h3 className="text-sm font-bold pb-2 pt-2">Easy to Shop</h3>
            <p className="text-sm">
            Also secure payments, pay seamlessly via <span className="font-bold">Mobile, Bank Transfer, or PayPay</span>
            </p>
          </div>

          <div className="p-1 m-2">
            <div className=" ">
              <img src={Support} alt="24/7 Support" className="w-10 h-10" />
              {/* <p className="bg-green-500 opacity-70 w-6 h-6 rounded-xl absolute top-[44.8rem] left-[57.5rem] z-index-0"></p> */}
            </div>
            <h3 className="text-sm font-bold pb-2 pt-2">24/7 Support</h3>
            <p className="text-sm">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>

          <div className="p-1 m-2">
            <div className=" ">
              <img
                src={Return}
                alt="Hassle Free Returns"
                className="w-10 h-10"
              />
              {/* <p className="bg-green-500 opacity-70 w-6 h-6 rounded-xl absolute top-[54.7rem] left-[57.5rem] z-index-0"></p> */}
            </div>
            <h3 className="text-sm  font-bold pb-2 pt-2">
              Hussle Free Returns
            </h3>
            <p className="text-sm">
            Hussle-free shipping to North America. Malesuada nullam ac aliquet
            velit aliquam vulputate.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
