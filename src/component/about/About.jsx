import { NavLink } from "react-router-dom";
import person1 from "../../assets/images/person_1.jpg";
import person2 from "../../assets/images/person_2.jpg";
import person3 from "../../assets/images/person_3.jpg";
import person4 from "../../assets/images/person_4.jpg";
// import greenfarmfield from "../../assets/images/green-farm-field.jpg";
// import bag from "../../assets/images/bag.svg";
// import truck from "../../assets/images//truck.svg";
// import Return from "../../assets/images/return.svg";
// import Support from "../../assets/images/support.svg";
import WhyUs from "../whyus/WhyUs";
import "./About.css";
import Header from "../header/Header";

const About = () => {
  return (
    <>
      <Header />

      <section className="about">
        {/* WhyUs section */}
        <WhyUs />
        {/* Our Team section */}
        <div className="mt-[5rem]">
          <h1 className="text-3xl text-center mb-[3rem]">Our Team</h1>
          <div className="about-Wrapper w-[90%] mx-auto grid grid-cols-4 mb-[6rem]">
            <div className="w-[15rem]">
              <img src={person1} alt="" className="w-full" />

              <NavLink to="*" className="text-2xl underline hover:no-underline">
                <h2 className=" mt-[2rem]">Lawson Arnold</h2>
              </NavLink>
              <p className="text-[0.8rem] mb-[1rem] mt-[1rem]">
                CEO, Founder, Atty.
              </p>
              <p>
                Separated they live in. Separated they live in Bookmarksgrove
                right at the coast of the Semantics, a large language ocean.
              </p>
              <NavLink
                to="*"
                className="font-bold underline hover:no-underline"
              >
                <p className="mt-[1rem]">Learn More </p>
              </NavLink>
            </div>
            <div className="w-[15rem]">
              <img src={person2} alt="" className="w-full" />

              <NavLink to="*" className="text-2xl underline hover:no-underline">
                <h2 className=" mt-[2rem]">Jeremy Walker</h2>
              </NavLink>
              <p className="text-[0.8rem] mb-[1rem] mt-[1rem]">
                CEO, Founder, Atty.
              </p>
              <p>
                Separated they live in. Separated they live in Bookmarksgrove
                right at the coast of the Semantics, a large language ocean.
              </p>
              <NavLink
                to="*"
                className="font-bold underline hover:no-underline"
              >
                <p className="mt-[1rem]">Learn More </p>
              </NavLink>
            </div>
            <div className="w-[15rem]">
              <img src={person3} alt="" className="w-full" />

              <NavLink to="*" className="text-2xl underline hover:no-underline">
                <h2 className=" mt-[2rem]">Patrik White</h2>
              </NavLink>
              <p className="text-[0.8rem] mb-[1rem] mt-[1rem]">
                CEO, Founder, Atty.
              </p>
              <p>
                Separated they live in. Separated they live in Bookmarksgrove
                right at the coast of the Semantics, a large language ocean.
              </p>
              <NavLink
                to="*"
                className="font-bold underline hover:no-underline"
              >
                <p className="mt-[1rem]">Learn More </p>
              </NavLink>
            </div>
            <div className="w-[15rem]">
              <img src={person4} alt="" className="w-full" />

              <NavLink to="*" className="text-2xl underline hover:no-underline">
                <h2 className=" mt-[2rem]">Kathryn Ryan</h2>
              </NavLink>
              <p className="text-[0.8rem] mb-[1rem] mt-[1rem]">
                CEO, Founder, Atty.
              </p>
              <p>
                Separated they live in. Separated they live in Bookmarksgrove
                right at the coast of the Semantics, a large language ocean.
              </p>
              <NavLink
                to="*"
                className="font-bold underline hover:no-underline"
              >
                <p className="mt-[1rem] ">Learn More </p>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
