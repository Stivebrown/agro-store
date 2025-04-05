import "./WhyUs.css"
import greenfarmfield from '../../assets/images/green-farm-field.jpg';
import bag from '../../assets/images/bag.svg';
import truck from '../../assets/images/truck.svg';
import Return from '../../assets/images/return.svg';
import Support from '../../assets/images/support.svg';


const WhyUs = () => {
  return (
    <>
      <div className=" mx-auto py-20 w-[90%] px-4 flex justify-between whyUs">
        <div className="w-[50%]   animate-rotateShadow rounded-xl whyUs">
          <div className="w-full mx-auto text-start p-2 leading-loose">
            <h2 className="text-3xl mb-4">Why Choose Us</h2>
            
            <p className="text-sm pr-5">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
          </div>
          <div className="grid grid-cols-2 mr-3 leading-loose">
            <div className="p-1 m-2  ">
              <div className=" ">
                <img src={truck} alt="Fast & Free Shipping" className="w-10 h-10 z-index-1" />
                {/* <p className="bg-green-500 opacity-70 w-6 h-6 rounded-xl absolute top-[82.3rem] left-[7rem] z-index-0"></p> */}
              </div>
              <h3 className="text-sm font-bold pb-2 pt-2">Fast &amp; Free Shipping</h3>
              <p className="text-sm">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>

            <div className="p-1 m-2 ">
              <div className="">
                <img src={bag} alt="Easy to Shop" className="w-10 h-10 z-index-1" />
                {/* <p className="bg-green-500 opacity-70 w-6 h-6 rounded-xl absolute top-[72.2rem] left-[7rem] z-index-0"></p> */}
              </div>
              <h3 className="text-sm font-bold pb-2 pt-2">Easy to Shop</h3>
              <p className="text-sm">
                Also secure payments, pay seamlessly via <span className="font-bold">Mobile, Bank Transfer, or PayPay</span>
              </p>
            </div>

            <div className="p-1 m-2">
              <div className=" ">
                <img src={Support} alt="24/7 Support" className="w-10 h-10" />
                {/* <p className="bg-green-500 opacity-70 w-6 h-6 rounded-xl absolute top-[82.3rem] left-[23.5rem] z-index-0"></p> */}
              </div>
              <h3 className="text-sm font-bold pb-2 pt-2">24/7 Support</h3>
              <p className="text-sm">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>

            <div className="p-1 m-2">
              <div className=" ">
                <img src={Return} alt="Hassle Free Returns" className="w-10 h-10" />
                {/* <p className="bg-green-500 opacity-70 w-6 h-6 rounded-xl absolute top-[72.2rem] left-[23.6rem] z-index-0"></p> */}
              </div>
              <h3 className="text-sm  font-bold pb-2 pt-2">Hassle Free Returns</h3>
              <p className="text-sm">
                Hussle-free shipping to North America. Malesuada nullam ac aliquet
                velit aliquam vulputate.
              </p>
            </div>
          </div>
        </div>

        <div className="w-[50%] p-4 whyUs">
          <div className=" ">
            <img src={greenfarmfield} alt="Why Choose Us" className="w-[29rem] mx-auto h-[25.5rem] rounded-xl" />
             
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
