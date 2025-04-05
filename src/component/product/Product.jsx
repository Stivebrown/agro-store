// import React from "react";
// import { NavLink } from "react-router-dom";
// import food from "../assets/images/food-consisted.jpg";
// import grocery from "../assets/images/grocery-store.jpg";
// import supermarket from "../assets/images/supermarket-shelf.jpg";

// const Product = () => {
//   return (
//     <>
//       <div className=" w-[90%] px-4 mx-auto">
//         <div className="flex justify-around mt-[8rem] w-full border-gray-200 mx-auto">
//           <div className="w-full lg:w-1/4 mb-5 mr-5">
//             <h2 className="mb-4 text-3xl">
//               Grown with excellent fertilizers.
//             </h2>
//             <p className="mb-4">
//               Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
//               velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
//             </p>
//             <p>
//               <NavLink
//                 to="/shop"
//                 className="bg-green-500 text-white p-2 rounded-2xl w-[10rem] hover:bg-green-700"
//               >
//                 Explore
//               </NavLink>
//             </p>
//           </div>

//           <div className=" flex flex-row w-[70%] justify-around">
//             <div className="flex flex-row justify-between sm:w-1/2 md:w-1/3 lg:w-1/4 w-[15rem] rounded hover:grayscale bg-gradient-to-l from-green-400 to-green-600  ">
//               <NavLink
//                 className="block  rounded-lg overflow-hidden  transition-shadow "
//                 to="*"
//               >
//                 <img src={food} className="w-full rounded-b-lg" alt="food" />
//                 <div className="p-4 text-center hover:translate-y-5 transition duration-300">
//                   <h3 className="font-bold">Beans Varieties</h3>
//                   <strong className="text-lg">$5.00</strong>
//                   <span className="icon-cross">
//                     <img  className="w-full" />
//                   </span>
//                 </div>
//               </NavLink>
//             </div>

//             <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4  w-[15rem] hover:grayscale bg-gradient-to-l from-green-400 to-green-600 rounded">
//               <NavLink
//                 className="block  rounded-lg overflow-hidden transition-shadow"
//                 to="*"
//               >
//                 <img
//                   src={grocery}
//                   className="w-full rounded-b-lg"
//                   alt="grocery"
//                 />
//                 <div className="p-4 text-center hover:translate-y-5 transition duration-300">
//                   <h3 className="font-bold ">Fruits Varieties</h3>
//                   <strong className="text-lg">$7.00</strong>
//                   <span className="icon-cross">
//                     <img  className="w-full" />
//                   </span>
//                 </div>
//               </NavLink>
//             </div>

//             <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4  w-[15rem] hover:opacity-70 bg-gradient-to-l from-green-400 to-green-600 rounded">
//               <NavLink
//                 className="block  rounded-lg overflow-hidden  transition-shadow"
//                 to="*"
//               >
//                 <img
//                   src={supermarket}
//                   className="w-full h-[8.5rem] rounded-b-lg"
//                   alt="supermarket"
//                 />
//                 <div className="p-4 text-center hover:translate-y-5 transition duration-300">
//                   <h3 className="font-bold">Vegetable Varieties</h3>
//                   <strong className="text-lg">$4.00</strong>
//                   <span className="icon-cross">
//                     <img  className="w-full " />
//                   </span>
//                 </div>
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Product;
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/Cart";
import Cart from "../cart/Cart";

const Product = () => {
  const { cartItems, addToCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);

  const toggle = () => {
    setShowModal(!showModal);
  };
  const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products"); // fetch the products
    const data = await response.json(); //converts the response to json
    setProducts(data.products); //set the products in the state to the products we fetch
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>


















    
      {/* <div className="flex flex-col justify-center bg-gray-100">
        <div className="flex justify-between items-center px-20 py-5">
          <h1 className="text-2xl uppercase font-bold mt-10 text-center mb-10">
            {" "}
            Shop
          </h1>

          {!showModal && (
            <button
              className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              onClick={toggle}
            >
              Cart ({cartItems.length})
            </button>
          )}
        </div>
        <div className="grid sm:grid-cols-2 md-grid-cols-3 lg:grid-cols-4 gap-4 px-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg gap-4 px-10"
            >
              <img src={product.thumbnail} alt={product.title} />
              <div className="mt-4">
                <h1 className="text-lg uppercase font-bold">{product.title}</h1>
                <p className="mt-2 text-gray-600 text-sm">
                  {product.description.slice(0, 40)}...
                </p>
                <p className="mt-2 text-gray-600">${product.price}</p>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <button
                  onClick={() => addToCart(product)}
                  className="px-4 py-2 bg-gray-800 text-white text-xsfont-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700 mb-2"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <Cart showModal={showModal} toggle={toggle} isCart/>
      </div> */}

    </>
  );
};

export default Product;
