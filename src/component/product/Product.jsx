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

 

const Product = (products, addToCart ) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <img src={products.image} alt={products.name} className="w-full h-40 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold text-gray-800">{products.name}</h2>
      <p className="text-green-600 font-bold mb-4">${products.price}</p>
      <button
        onClick={() => addToCart(products)}
        className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;