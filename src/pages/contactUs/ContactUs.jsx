import { FaMapMarker, FaEnvelope, FaPhoneAlt} from "react-icons/fa";
import "./ContactUs.css";


// FaEyeSlash htmlFor password input field icon
const ContactUs = () => {
    //handling the default submission of the htmlForm 
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
        
      <div className="contact-Wrapper w-[100%] bg-gray-200 h-[50rem]  ">
        <div className="w-[67%] mx-auto pt-10 leading-[3rem]">
          <div className="contact-location grid grid-cols-3 mb-[3rem] mt-[5rem] gap-3">
            <div className="flex gap-3">
               {/* I placed div containing the paragraphs in the divs containing the Fa icons */}
              <div className="">
               
                <FaMapMarker className="hover:text-green-400 w-10 h-10 text-white" />
                <div className=" leading-[1.5rem] text-[0.9rem] text-gray-600 flex justify-center items-center">
                <p>Tarred Malingo<br/>  Bar7, Molyko Buea</p>
              </div>
              </div>
            
            </div>
            <div className="flex gap-3">
              <div className="">
                <FaEnvelope className="hover:text-green-400 w-10 h-10 text-white" />
                <div className="leading-[1.5rem] text-[0.9rem] text-gray-600 flex justify-center items-center">
                <p>info@StiveCo.com</p>
              </div>
              </div>
              
            </div>
            <div className="flex  gap-3">
              <div className="">
                <FaPhoneAlt className="hover:text-green-400 w-10 h-10 text-white" />
                <div className="leading-[1.5rem] text-[0.9rem] text-gray-600 flex justify-center items-center">
                <p>+237 674 05 51 21</p>
              </div>
              </div>
              
            </div>
          </div>
          <htmlForm className="" onSubmit={handleSubmit}>
            <div className="htmlForm-div grid grid-cols-2 gap-3">
              <div className=" w-[25rem]">
                <div className="  grid grid-cols-1">
                  <label className="text-black text-[0.9rem]" htmlFor="fname">
                    First name
                  </label>
                  <input
                    type="text"
                    className="w-[24.5rem]  outline-none ring-1 focus:ring-green-500 rounded-lg pl-2"
                    id="fname"
                  />
                </div>
              </div>
              <div className="w-[25rem] ">
                <div className=" grid grid-cols-1 ">
                  <label className="text-black text-[0.9rem]" htmlFor="lname">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="w-[24.5rem]  outline-none ring-1 focus:ring-green-500  rounded-lg pl-2"
                    id="lname"
                  >
                    
                  </input>
                </div>
              </div>
            </div>
            <div className=" ">
              <label className="text-black text-[0.9rem]" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                className="w-full outline-none ring-1 focus:ring-green-500  rounded-lg pl-2"
                id="email"
              />
            </div>

            <div className=" mb-5 w-full">
              <label className="text-black text-[0.9rem]" htmlFor="message">
                Message
              </label>
              <textarea
                name=""
                className="w-full h-[9rem] rounded-lg pl-2 focus:outline-none ring-1 focus:ring-green-500  "
                id="message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="htmlForm-btn w-[10rem]  text-black rounded-3xl bg-green-500 hover:bg-green-400 mt-4"
            >
              Send Message
            </button>
          </htmlForm>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
