import { useState, useEffect } from "react";
import food from "../../assets/images/food-consisted.jpg";
import grocery from "../../assets/images/grocery-store.jpg";
import supermarket from "../../assets/images/supermarket-shelf.jpg";
// import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
// import person from "../assets/images/person-1.png";

const Testimonial = () => {
  // const slides = [
  //   {
  //     image: {food},
  //     text: " Donec facilisis quam ut purus rut lobortis. Donec vitae odio quis nisl damalesuada.  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.Pellentesque habitant morbi tristique senectus etnetus et malesuada fames ac turpInteger convallis volutpat dui quis scelerisque.",
  //   },
  //   {
  //     image: {food},
  //     text: " Donec facilisis quam ut purus rut lobortis. Donec vitae  ",
  //   },
  //   {
  //     image: {food},
  //     text: " Donec facilisis quam ut purus",
  //   }
  // ];

  // const [currentSlide, setCurrentSlide] = useState(0);
  // const nextSlide = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  // };
  // const prevSlide = () => {
  //   setCurrentSlide(
  //     (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
  //   );
  // };

  const images = [food, grocery,supermarket];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [currentIndex]);
  return (
    <>
      {/* <div className=" py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Testimonials</h2>
          </div>
          <img src={slides[currentSlide].image} alt="food" className="bg-cover"/>
          <div className="flex justify-center">
            <div className="w-full lg:w-10/12">
              <div className="testimonial-slider-wrap text-center">
                <div
                  id="testimonial-nav"
                  className="text-green-50 flex justify-between"
                >
                  <span className="">
                    <FaChevronLeft
                      className="bg-green-500 text-green-900 text-center w-[4rem] h-[4rem] rounded-[3rem] hover:bg-green-700"
                      onClick={prevSlide}
                    />{" "}
                  </span>
                  <span className="" >
                    <FaChevronRight
                      className="bg-green-500 text-green-900 text-center w-[4rem] h-[4rem] rounded-[3rem] hover:bg-green-700"
                      onClick={nextSlide}
                    />{" "}
                  </span>
                </div>

                <div className="testimonial-slider" >
                
                  <div className="">
                    
                    <div className="row justify-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="text-center">
                          <blockquote className="mb-5">
                            <p>
                            {slides[currentSlide].text} 
                            </p>
                          </blockquote>

                          <div className="author-info">
                            <div className="author-pic" >
                              <img
                                src={person}
                                alt="Maria Jones"
                                className="w-16 h-16 rounded-full mx-auto" 
                              />
                            </div>
                            <h3 className="font-bold" ></h3>
                            <span className="block mb-3">
                              CEO, Co-Founder, XYZ Inc.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- END item --> */}

                  {/* <!-- More testimonial items can be added here --> */}
                {/* </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    <div className="relative w-full max-w-3xl mx-auto mt-12 mb-10 bg-slate-100">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-64 object-cover"
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none"
      >
        &#8594;
      </button>
    </div>
 

 
    </>
  );
};

export default Testimonial;
