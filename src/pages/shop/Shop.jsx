// import  { useState } from "react";
import food from "../../assets/images/food-consisted.jpg";
import bowl2 from "../../assets/images/bowl-2.png";
import bowl3 from "../../assets/images/bowl-3.png";
import { FaSearch } from "react-icons/fa";
import "./Shop.css";
import Header from "../../component/header/Header";
import { useState } from "react";
import datas from "./data.json";

const Shop = () => {
  // const changeColor = () => {
  //   // style : {
  //   //   color: 'green',
  //   // }
  // }
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    //Our api to search for the results
    console.log("Search", searchTerm);
  };

  return (
    <>
      <Header />
      <section className="Shop-Wrapper">
        <section className="top-products bg-slat-100 mt-[2rem]">
          <h1 className="top-title text-3xl text-gray-700 mb-4 text-center">
            Top Products
          </h1>
          <div className="w-[80%] flex flex-row flex-wrap m-auto gap-5 ">
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
                src={bowl3}
                className="shop-img w-[15rem] h-[11rem] rounded-lg"
                alt="food"
              />
            </div>
          </div>
        </section>
        <section className="shop-cards w-[80%] flex flex-row mt-8 m-auto px-2 justify-between">
          <section className="categories w-[10rem] bg-slate-100 mt-[5.5rem] ml-2 h-60">
            <h1 className="text-gray-500 text-[1.2rem] text-center">
              Categories
            </h1>
            <div className="categoriesList p-2">
              <p className="list flex ">
                <input
                  type="checkbox"
                  name="banana"
                  id="banana"
                  className="mr-2"
                />
                <label htmlFor="banana">Banana</label>
              </p>
              <p className="list">
                <input
                  type="checkbox"
                  name="Mideno Beans"
                  id="Mideno Beans"
                  className="mr-2"
                />
                <label htmlFor="Mideno Beans">Mideno Beans</label>
              </p>
              <p className="list">
                <input
                  type="checkbox"
                  name="Red Beans"
                  id="Red Beans"
                  className="mr-2"
                />
                <label htmlFor="Red Beans">Red Beans</label>
              </p>
              <p className="list">
                <input
                  type="checkbox"
                  name="Black Beans"
                  id="Black Beans"
                  className="mr-2"
                />
                <label htmlFor="Black Beans">Black Beans</label>
              </p>
            </div>
          </section>

          <section className="shop-cards  w-[85%]  mb-[6rem] relative  px-2">
            <section className="filter mt-[2rem] relative mb-2">
              <div className=" flex justify-between items-center w-full">
                <div className="flex w-50 ">
                  <h2 className="text-2xl text-gray-700 mb-4">All Products</h2>
                </div>

                <div className="flex w-50">
                  <input
                    type="search"
                    value={value}
                    id="shop-searchbar"
                    placeholder="Search"
                    onChange={handleChange}
                    className="h-[2rem] rounded-lg  text-black pl-2"
                  />
                  <FaSearch
                    className="mt-2 bg-white cursor-pointer absolute mr-6 right-[-15px] my-auto"
                    onClick={() => onSearch(value)}
                  />
                </div>
              </div>
            </section>
            <div className="flex flex-row flex-wrap">
              <div className="shop-card w-[17.5rem] rounded  bg-slate-100 block  overflow-hidden  transition-shadow mr-2">
                <div className="flex justify-between gap-1">
                  <img
                    src={bowl3}
                    className="shop-img w-[12rem] h-[11rem] rounded-lg"
                    alt="food"
                  />
                  <div className="text-end mr-2 flex flex-col pt-4">
                    <h3 className="font-bold">Beans Varieties</h3>
                    <strong className="text-lg">$5.00</strong>
                    <button className="bg-gradient-to-l from-green-400 to-green-600 w-[3rem] mt-2 ml-8">
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
              <div className="shop-card w-[17.5rem] h-[11rem] rounded  bg-slate-100 block  overflow-hidden  transition-shadow mr-2">
                <div className="flex justify-between gap-1">
                  <img
                    src={bowl2}
                    className="shop-img w-[12rem] h-[11rem] rounded-lg"
                    alt="food"
                  />
                  <div className="text-end mr-2 flex flex-col pt-4">
                    <h3 className="font-bold">Beans Varieties</h3>
                    <strong className="text-lg">$5.00</strong>
                    <button className="bg-gradient-to-l from-green-400 to-green-600 w-[3rem] mt-2 ml-8">
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
              <div className="shop-card w-[17.5rem] rounded  bg-slate-100 block overflow-hidden  transition-shadow mr-2">
                <div className="flex justify-between gap-1">
                  <img
                    src={bowl3}
                    className="shop-img w-[12rem] h-[11rem] rounded-lg"
                    alt="food"
                  />
                  <div className="text-end mr-2 flex flex-col pt-4">
                    <h3 className="font-bold">Beans Varieties</h3>
                    <strong className="text-lg">$5.00</strong>
                    <button className="bg-gradient-to-l from-green-400 to-green-600 w-[3rem] mt-2 ml-8">
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
              {/* <div className="shop-card w-[17rem] rounded  bg-slate-100 overflow-hidden block transition-shadow mt-4 mr-2">
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
                    <div className="icons mt-3 flex">
                      <FaThumbsUp
                        className="  text-xl mr-2"
                        onClick={changeColor}
                      />
                      <FaThumbsDown className="   text-xl mr-2 mt-1" />
                      <FaHeart className="  text-xl mt-1" />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </section>
        </section>
        <div className="dropdown bg-slate-100 h-44">
          {datas.data.map((item) => {
            <div className="border-b-2 border-black text-black bg-slate-50">
              {item.name}
            </div>;
          })};
        </div>
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
