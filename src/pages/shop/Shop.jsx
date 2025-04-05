// import  { useState } from "react";
import food from "../../assets/images/food-consisted.jpg";

import bowl3 from "../../assets/images/bowl-3.png";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import "./Shop.css";
import { useState } from "react";
// import datas from "./data.json";
import Product from "../../component/product/Product";

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
      <section className="shopProducts">
        <section className="shopProductWrapper">
          <section className="shopItem  bg-slat-100 mt-[2rem]">
            <h1 className="shopItemTitle text-3xl text-gray-700 mb-4 text-center">
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
            {/* ================================Category Section================================*/}
            <section className="categories w-[10rem] bg-slate-200 mt-[5.5rem] ml-2 h-60 static ">
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
            {/* ============================Products==========================*/}
            <section className="shop-cards  w-[90%]  mb-[2rem] relative bg-slate-100 px-2 h-[25rem] ml-[10px]">
              <section className="filter mt-[2rem] relative mb-2 ">
                <div className=" flex justify-between items-center w-full">
                  <div className="flex w-50 ">
                    <h2 className="text-2xl text-gray-700 mb-4">
                      All Products
                    </h2>
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
              <hr className="bg-black mb-[1rem] h-[3px]"></hr>
              <div className="flex flex-row flex-wrap">
                <div className="shop-card w-[17.5rem] rounded  bg-slate-100 block  overflow-hidden  transition-shadow mr-2">
                  <div className="flex justify-between gap-1 shadow shadow-[#000]">
                    <img
                      src={bowl3}
                      className="shop-img w-[12rem] h-[11rem] rounded-lg"
                      alt="food"
                    />
                    <div className="text-end mr-2 flex flex-col pt-4">
                      <h3 className="font-bold">Beans Varieties</h3>
                      <strong className="text-lg">$5.00</strong>
                      <div className="AddToCartBox  flex justify-center w-[5.5rem] h-[3rem] text-center cursor-pointer">
                        <button className="bg-gradient-to-l flex justify-center items-center from-green-400 to-green-600 w-full mt-2">
                          Add
                          <FaArrowRight className="FaArrowRight w-[2rem] text-lime-700 " />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
      </section>
      <Product />
    </>
  );
};

export default Shop;
