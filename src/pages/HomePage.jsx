// import Product from "../component/product/Product";
import WhyUs from "../component/whyus/WhyUs";
import PopularProduct from "../component/popularproducts/PopularProuduct";
import Blog from "../component/blog/Blog";
import Hero from "../component/hero/Hero";
import Header from "../component/header/Header";
import Testimonial from '../component/testimonial/Testimonial';

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <PopularProduct />
      {/* <Product /> */}
      <WhyUs />
      <Blog />
      <Testimonial/>
    </>
  );
};

export default HomePage;
