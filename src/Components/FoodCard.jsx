import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

function FoodCard({ id, name, price, rating, img, desc, handalToast }) {
  const dispatch = useDispatch();

  function handal() {
    console.log("heelo world");
  }

  return (
    <>
      <div className="font-bold w-[250px] bg-white p-5 flex flex-col gap-2 rounded-lg ">
        <img
          src={img}
          alt=""
          className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
        />
        <div className="p-1 flex justify-between">
          <h2>{name}</h2>
          <span className="text-green-500">₹ {price}</span>
        </div>
        <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>

        <div className="flex justify-between">
          <span className=" flex justify-center items-center">
            <FaStar className="mr-1 text-yellow-400" /> {rating}
          </span>
          <button
            onClick={() => {
              dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));
              handalToast(name);
            }}
            className="p-1 bg-green-500 text-white hover:bg-green-600 rounded-lg text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default FoodCard;
