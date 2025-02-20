import "./Hero.css";
import { NavLink } from "react-router-dom";
import assortment from "../../assets/images/assortment.jpg";

const Hero = () => {
  const title = "Modern Products Distribution Around Countries";
  const description =
    "Welcome to our amazing best selling agro products site. Come and let maintain your exciting steez and make sure you will want to come .";

  return (
    <div className="heroBackground bg-gradient-to-t from-green-400 to-green-600 shadow-lg py-10 text-white">
      <div className="hero">
        <div className="sub-container lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4 mt-[4rem]"> {title}</h1>
          <p className="mb-6 text-sm"> {description}</p>
          <p>
            <NavLink
              to="/shop"
              className="bg-white text-green-700 py-2 px-4 rounded-3xl mr-2 hover:bg-green-600 hover:text-white"
            >
              Shop Now
            </NavLink>
            <NavLink
              to="/blogs"
              className="border border-green-400 text-white  py-2 px-4 rounded-3xl hover:bg-green-600"
            >
              Explore
            </NavLink>
          </p>
        </div>
        <div className="hero-img-wrap lg:w-1/2">
          <img
            src={assortment}
            className="w-full rounded-lg ml-10"
            alt="assortment"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
