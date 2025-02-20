// import  { useState } from "react";
import food from "../../assets/images/food-consisted.jpg";
import { FaSearch } from "react-icons/fa";
import "./Shop.css";
import Header from "../../component/header/Header";

const Shop = () => {
  // const changeColor = () => {
  //   // style : {
  //   //   color: 'green',
  //   // }
  // }
  return (
    <>
      <Header />
      <section className="Shop-Wrapper">
        <section className="top-products bg-slat-100 mt-[2rem]">
          <h1 className="top-title text-3xl text-gray-700 ml-[10.5rem]">
            Top Products
          </h1>
          <div className="w-[80%] flex flex-row flex-wrap p-4 m-auto gap-5 ">
            <div className="w-[15rem] ml-4">
              <img
                src={food}
                className="shop-img w-[15rem] h-[11rem] rounded-lg"
                alt="food"
              />
            </div>
            <div className="w-[15rem]">
              <img
                src={food}
                className="shop-img w-[15rem] h-[11rem] rounded-lg"
                alt="food"
              />
            </div>
            <div className="w-[15rem]">
              <img
                src={food}
                className="shop-img w-[15rem] h-[11rem] rounded-lg"
                alt="food"
              />
            </div>
            <div className="w-[15rem]">
              <img
                src={food}
                className="shop-img w-[15rem] h-[11rem] rounded-lg"
                alt="food"
              />
            </div>
          </div>
        </section>
        <section className="shop-cards w-[100%] flex flex-row mt-8">
          <section className="categories w-[18rem] bg-slate-100 mt-[2rem] h-96">
            <h1 className="text-gray-500 text-[2rem] text-center">
              Categories
            </h1>
          </section>

          <section className="shop-cards  w-[65%]  mx-auto mt-[2rem] mb-[6rem] relative px-3">
            <h2 className="text-2xl text-gray-700 mb-4">All Products</h2>
            <div className="flex flex-row flex-wrap">
              <div className="shop-card w-[17.3rem] rounded  bg-slate-50 block  overflow-hidden  transition-shadow mr-2">
                <div className="flex justify-between gap-1">
                  <img
                    src={food}
                    className="shop-img w-[11rem] h-[11rem] rounded-lg"
                    alt="food"
                  />
                  <div className="text-start flex flex-col">
                    <h3 className="font-bold">Beans Varieties</h3>
                    <strong className="text-lg">$5.00</strong>
                    <button className="bg-gradient-to-l from-green-400 to-green-600 w-[6rem] mt-2">
                      Add
                    </button>
                    {/* <div className="icons mt-3 flex">
                <FaThumbsUp className="  text-xl mr-2" />
                <FaThumbsDown className="   text-xl mr-2 mt-1" />
                <FaHeart className="  text-xl mt-1" />
              </div> */}
                  </div>
                </div>
              </div>
              <div className="shop-card w-[17.3rem] h-[11rem] rounded  bg-slate-100 block  overflow-hidden  transition-shadow mr-2">
                <div className="flex justify-between gap-1">
                  <img
                    src={food}
                    className="shop-img w-[12rem] h-[11rem] rounded-lg"
                    alt="food"
                  />
                  <div className="text-start flex flex-col">
                    <h3 className="font-bold">Beans Varieties</h3>
                    <strong className="text-lg">$5.00</strong>
                    <button className="bg-gradient-to-l from-green-400 to-green-600 rounded-sm w-[6rem] mt-2">
                      Add
                    </button>
                    {/* <div className="icons mt-3 flex">
                <FaThumbsUp className="  text-xl mr-2" />
                <FaThumbsDown className="   text-xl mr-2 mt-1" />
                <FaHeart className="  text-xl mt-1" />
              </div> */}
                  </div>
                </div>
              </div>
              <div className="shop-card w-[17rem] rounded  bg-slate-100 block overflow-hidden  transition-shadow mr-2">
                <div className="flex justify-between gap-1">
                  <img
                    src={food}
                    className="shop-img w-[12rem] h-[11rem] rounded-lg"
                    alt="food"
                  />
                  <div className="text-start flex flex-col">
                    <h3 className="font-bold">Beans Varieties</h3>
                    <strong className="text-lg">$5.00</strong>
                    <button className="bg-gradient-to-l from-green-400 to-green-600 w-[6rem] mt-2">
                      Add
                    </button>
                    {/* <div className="icons mt-3 flex">
                <FaThumbsUp className="  text-xl mr-2" />
                <FaThumbsDown className="   text-xl mr-2 mt-1" />
                <FaHeart className="  text-xl mt-1" />
              </div> */}
                  </div>
                </div>
              </div>
              <div className="shop-card w-[17rem] rounded  bg-slate-100 overflow-hidden block transition-shadow mt-4 mr-2">
                <div className="flex justify-between gap-1">
                  <img
                    src={food}
                    className="shop-img w-[10rem] h-[11rem] rounded-lg"
                    alt="food"
                  />
                  <div className="text-start flex flex-col">
                    <h3 className="font-bold">Beans Varieties</h3>
                    <strong className="text-lg">$5.00</strong>
                    <button className="bg-gradient-to-l from-green-400 to-green-600 w-[6rem] mt-2">
                      Add
                    </button>
                    {/* <div className="icons mt-3 flex">
                <FaThumbsUp className="  text-xl mr-2" onClick={changeColor} />
                <FaThumbsDown className="   text-xl mr-2 mt-1" />
                <FaHeart className="  text-xl mt-1" />
              </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="filter w-[14%]   mt-[2rem] relative flex flex-cols">
            <div className=" flex flex-row gap-1">
              <input
                type="search"
                name=""
                id=""
                value="search"
                placeholder="search"
                className="h-[2rem] w-[10rem] pl-3 rounded-lg outline-none text-black"
              />
              <FaSearch className="mt-3 bg-white cursor-pointer" />
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Shop;

// import  Product from "../component/Product"; // Assume this is a component displaying each product
// import Cart from './Cart';

// const products = [
//   { id: 1, name: 'Product 1', price: 10, image: 'food' },
//   { id: 2, name: 'Product 2', price: 20, image: 'grocery' },
//   { id: 3, name: 'Product 3', price: 30, image: 'supermarket'}
// ];

// const Shop = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (products) => {
//     setCart((prevCart) => {
//       const existingProduct = prevCart.find((item) => item.id === products.id);
//       if (existingProduct) {
//         return prevCart.map((item) =>
//           item.id === products.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prevCart, { ...products, quantity: 1 }];
//     });
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold text-green-700 mb-8">Shop</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
//         {products.map((product) => (
//           <Product key={product.id} product={product} addToCart={addToCart} />
//         ))}
//       </div>
//       {/* <Cart cart={cart} /> */}
//     </div>
//   );
// };

// export default Shop;
