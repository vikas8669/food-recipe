import { IoMdClose } from "react-icons/io";
import ItemCard from "./itemCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItem = useSelector((state) => state.cart.cart);
  const totalQty = cartItem.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItem.reduce(
    (totalQty, item) => totalQty + item.qty * item.price,
    0
  );

  const navigate = useNavigate();
  return (
    <>
      <div
        className={`fixed right-0 top-0 lg:w-[20vw] w-full h-full bg-white p-3 mb-3 
        ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center m-2">
          <span className="text-xl font-bold text-gray-800">My Orders</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-400 hover:border-red-400 cursor-pointer"
          />
        </div>

        {cartItem.length > 0 ? (
          cartItem.map((food) => {
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                qty={food.qty}
                img={food.img}
              />
            );
          })
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-800 ">
            Your cart is empty
          </h2>
        )}

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items:{totalQty} </h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount:{totalPrice}{" "}
          </h3>
          <hr className="w[18vw] lg:w-[90vw] my-2" />
          <button
            onClick={() => navigate("/success")}
            className="bg-green-500 text rounded-lg px-3 py-1 font-bold text-white lg:w-[18vw] w-[90vw]] mb-5"
          >
            Checkout
          </button>
        </div>
      </div>
      <FaCartPlus
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-10 right-7 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        }`}
      />
    </>
  );
};

export default Cart;
