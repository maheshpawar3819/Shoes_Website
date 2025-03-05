import React from "react";
import { useDispatch } from "react-redux";
import { removetocart } from "./Utils/cartslice";
const Cartcard = ({ info }) => {
  const dispatch = useDispatch();
  const { productType, title, options, variants, images } = info;
  const opt = options[0]?.values[0];
  const img = images[0]?.url;
  const img2 = images[1]?.url;
  const img3 = images[2]?.url;
  const price = variants[0]?.price;

  const removeitem = () => {
    dispatch(removetocart(""));
  };

  return (
    <div className="mt-36 p-2 h-auto flex justify-around shadow-md">
      <div className="">
        <h1 className="text-2xl text-red-500 font-sans py-2">{productType}</h1>
        <h1 className="text-xl text-gray-600 font-thin py-2">{title}</h1>
        <p className="text-lg text-gray-700 font-extralight py-2">
          {" "}
          Color : {opt}
        </p>
        <p className="text-lg text-gray-700 font-bold py-2">Rs : {price}/-</p>
        <button
          className="bg-gray-500 w-24 hover:bg-red-500 rounded-md p-2 tracking-widest text-white"
          onClick={removeitem}
        >
          Remove
        </button>
        <button className="bg-gray-500 mx-4 w-24 hover:bg-green-500 rounded-md p-2 tracking-widest text-white">
          Buy
        </button>
      </div>
      <div className="flex justify-evenly">
        <img className="w-44 h-48" src={img} alt="" />
        <img className="w-44 h-48" src={img2} alt="" />
        <img className="w-44 h-48" src={img3} alt="" />
      </div>
    </div>
  );
};

export default Cartcard;
