import { motion } from "framer-motion";
import bag from "../../assets/images/bag.svg";
import truck from "../../assets/images/truck.svg";
import Support from "../../assets/images/support.svg";
import Return from "../../assets/images/return.svg";
import "./Service.css";

const Service = () => {
  return (
    <>
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
              Also secure payments, pay seamlessly via{" "}
              <span className="font-bold">
                Mobile, Bank Transfer, or PayPay
              </span>
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
              Also secure payments, pay seamlessly via{" "}
              <span className="font-bold">
                Mobile, Bank Transfer, or PayPay
              </span>
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

      <div className="bg-green-50 text-gray-800">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-10 bg-green-600 text-white"
        >
          <h1 className="text-3xl font-bold">
            Experience Excellence in Every Interaction
          </h1>
          <p className="text-lg mt-2">
            Reliable support, fast order processing, and expert guidance for all
            your agricultural needs.
          </p>
          <motion.div
            className="mt-5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="tel:+1234567890"
              className="bg-white text-green-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-200"
            >
              Call Us Now
            </a>
            <a
              href="/shop"
              className="ml-4 bg-yellow-400 px-6 py-2 rounded-md font-semibold hover:bg-yellow-500"
            >
              Shop with Confidence
            </a>
          </motion.div>
        </motion.div>

        {/* Services Section */}
        <div className="max-w-5xl mx-auto py-10 px-5">
          <h2 className="text-2xl font-bold text-center">
            What Makes Our Service Excellent?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <ServiceCard
              title="24/7 Customer Support"
              desc="Fast responses via phone, chat, or email."
            />
            <ServiceCard
              title="Fast Order Processing"
              desc="Orders handled efficiently for quick delivery."
            />
            <ServiceCard
              title="Reliable Delivery"
              desc="Timely shipping with tracking updates."
            />
            <ServiceCard
              title="Expert Consultation"
              desc="Get advice from agronomists."
            />
            <ServiceCard
              title="Real-time Inventory Updates"
              desc="Accurate stock availability before purchase."
            />
          </div>
        </div>

        {/* Contact Section */}
        <motion.div
          className="bg-green-100 py-10 px-5 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold">How to Access Our Services</h2>
          <p className="mt-3">We’re here to help you anytime!</p>
          <div className="mt-5 space-y-3">
            <p>
              📞 Phone:{" "}
              <a href="tel:+1234567890" className="font-bold text-green-600">
                +123-456-7890
              </a>
            </p>
            <p>
              💬 WhatsApp:{" "}
              <a
                href="https://wa.me/1234567890"
                className="font-bold text-green-600"
              >
                Click to Chat
              </a>
            </p>
            <p>
              📧 Email:{" "}
              <a
                href="mailto:support@youragrostore.com"
                className="font-bold text-green-600"
              >
                support@youragrostore.com
              </a>
            </p>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <div className="max-w-4xl mx-auto py-10 px-5">
          <h2 className="text-2xl font-bold text-center">
            What Our Customers Say
          </h2>
          <div className="mt-6 space-y-5">
            <Testimonial
              text="Best agro service I’ve ever used! Super fast delivery and great customer support!"
              name="John D."
            />
            <Testimonial
              text="Their agronomists helped me pick the best fertilizers for my crops. Highly recommend!"
              name="Sarah M."
            />
          </div>
        </div>

        {/* Call-to-Action */}
        <motion.div
          className="text-center py-10 bg-green-600 text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold">Need Help? Contact Us Now!</h2>
          <div className="mt-5">
            <a
              href="tel:+1234567890"
              className="bg-white text-green-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-200"
            >
              Call Now
            </a>
            <a
              href="/shop"
              className="ml-4 bg-yellow-400 px-6 py-2 rounded-md font-semibold hover:bg-yellow-500"
            >
              Browse Products
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};
{
  /* // Service Card Component with Animation */
}
const ServiceCard = ({ title, desc }) => (
  <motion.div
    className="bg-white shadow-md p-5 rounded-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-xl font-bold text-green-600">{title}</h3>
    <p className="mt-2">{desc}</p>
  </motion.div>
);
{
  /* // Testimonial Component with Fade-in Animation */
}
const Testimonial = ({ text, name }) => (
  <motion.div
    className="bg-white shadow-md p-5 rounded-lg"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <p className="italic">"{text}"</p>
    <p className="mt-3 font-semibold text-right">- {name}</p>
  </motion.div>
);

export default Service;
