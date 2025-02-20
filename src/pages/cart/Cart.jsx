 import { useState ,  } from "react";
import food from "../../assets/images/food-consisted.jpg";
// import grocery from "../../assets/images/grocery-store.jpg";
// import supermarket from "../../assets/images/supermarket-shelf.jpg";
import { NavLink } from "react-router-dom";
import Header from "../../component/header/Header";
import "./Cart.css"
 

const Cart = () => {
 

  const [count, setCount] = useState(0);
  // useEffect = (() => {
  //   console.log(`Count has change to ${count}`);
  // }, [count]);
  const handleIncrement = () => {
    setCount(count + 1);
     
  };
  const handleDecrement = () => {
    setCount(count - 1);
    
  };

  // const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
   
 
  return (
    <>
     <Header/>
     
      <div className="cart-Wrapper bg-gray-100">
        <div className="w-[80%] h-[140vh] pt-[5rem] mx-auto m-0 ">
          <div className="">
            <form className="" method="post">
              <div className="flex justify-between items-center border-b-2 border-black gap-7">
                <h2 className=" mb-[2rem] w-[8rem] text-center">Image</h2>
                <h2 className=" mb-[2rem] w-[8rem] text-center">Product</h2>
                <h2 className=" mb-[2rem] w-[8rem] text-center">Price</h2>
                <h2 className=" mb-[2rem] w-[8rem] text-center">Quantity</h2>
                <h2 className=" mb-[2rem] w-[8rem] text-center">Total</h2>
                <h2 className=" mb-[2rem] w-[8rem] text-center">Remove</h2>
              </div>

              <div className="flex justify-between items-center h-[10rem]  border-b-2 border-gray-200">
                <img src={food} alt="Image" className="w-[8rem] h-[8rem]" />

                <h2 className="h5  w-[8rem] text-center text-black">
                  Product 1
                </h2>

                <p className="text-center w-[8rem]">$49.00</p>

                <div className="flex justify-between  w-[8rem]">
                  <button className=" " type="button" onClick={handleDecrement}>
                    &minus;
                  </button>

                  <input
                    type="text"
                    className="text-center  w-[3rem] outline-none h-[2rem] bg-slate-300"
                    value={count}
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                  />

                  <button className=" " type="button" onClick={handleIncrement}>
                    +
                  </button>
                </div>

                <p className=" w-[8rem] text-center">$49.00</p>

                <button  className="text-center w-[8rem]"  >
                  X
                </button>
              </div>

              <div className="flex justify-between items-center h-[10rem] mb-[3rem] border-b-2 border-gray-200">
                <img src={food} alt="Image" className="w-[8rem] h-[8rem]" />

                <h2 className="h5  w-[8rem] text-center text-black">
                  Product 1
                </h2>

                <p className="text-center w-[8rem]">$49.00</p>

                <div className="flex justify-between  w-[8rem] ">
                  <button className=" " type="button" onClick={handleDecrement}>
                    &minus;
                  </button>

                  <input
                    type="text"
                    className="text-center  w-[3rem] outline-none h-[2rem] bg-slate-300"
                    value={count}
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    count={count}
                  />

                  <button className=" " type="button" onClick={handleIncrement}>
                    +
                  </button>
                </div>

                <p className=" w-[8rem] text-center">$49.00</p>

                <button  className="text-center w-[8rem] "  >
                  X
                </button>
              </div>
            </form>

            <div className="w-[100%] mx-auto flex justify-between m-0">
              <div className="w-[30rem]">
                <div className="flex justify-between mb-[3rem]">
                  <div className="">
                    <button className="bg-gray-800 text-white text-[1rem] rounded-[2rem] p-[0.5rem] w-[10rem] h-[3rem] font-bold mr-[2rem]">
                     <NavLink to="/updateCart"> Update Cart</NavLink>
                    </button>
                  </div>
                  <div className=" ">
                    <button className="bg-gray-800 text-white text-[1rem] rounded-[2rem] p-[0.5rem] w-[14rem] h-[3rem] font-bold">
                      <NavLink to="/shop">Continue Shopping</NavLink>
                    </button>
                  </div>
                </div>
                <div className="leading-loose">
                  <div className=" ">
                    <label
                      className="text-black text-[1.5rem] font-bold"
                      for="coupon"
                    >
                      Coupon
                    </label>
                    <p className="mb-[1rem] text-gray-400">
                      Enter your coupon code if you have one.
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <div className="">
                      <input
                        type="text"
                        className="bg-white py-2 outline-none ring-1 focus:ring-green-500 text-gray-400 w-[20rem] rounded-[0.5rem] pl-3"
                        id="coupon"
                        placeholder="Coupon Code"
                      />
                    </div>
                    <div className="">
                      <button className="bg-gray-800 py-2 rounded-[1rem] text-white font-bold w-[8rem]">
                        Apply Coupon
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[20rem]  ">
                <div className="border-b-2 border-gray-200 pb-[1rem] mb-[2rem] w-[16rem]">
                  <h3 className="text-black text-3xl">CART TOTALS</h3>
                </div>
                <div className="grid grid-cols-2">
                  <div className="grid grid-cols-1 mb-[2rem]">
                    <span className="text-black ">Subtotal</span>
                  </div>
                  <div className=" ">
                    <strong className="text-black">$230.00</strong>
                  </div>

                  <div className="grid grid-cols-1">
                    <span className="text-black">Total</span>
                  </div>
                  <div className=" ">
                    <strong className="text-black">$230.00</strong>
                  </div>
                </div>
                <div className="col-md-12">
                  <button
                    className="bg-gray-800 text-white p-3 mt-[4rem] rounded-[2rem] w-[18rem] font-bold text-[1.5rem]"
                    onclick="window.location='checkout.html'"
                  >
                    <NavLink to="/checkOut">Proceed To Checkout</NavLink>
                    
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


 
 
    {/* <div className="w-full max-w-md mt-8 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <p className="text-green-600 font-bold">${item.price * item.quantity}</p>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 text-right">
        <p className="text-xl font-semibold text-gray-800">Total: ${totalAmount}</p>
      </div>
    </div> */}
 
    </>
  );
};

export default Cart;
