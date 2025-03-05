import React from "react";
import { addtocart } from "./Utils/cartslice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Menscard = ({ data }) => {
  const dispatch = useDispatch();
  const { title, images, variants, options } = data || {};
  const img = images[0]?.url;
  const price = variants[0]?.price;
  const option = options[1]?.values;

  const addproduct = () => {
    dispatch(addtocart(data));
  };

  return (
    <div className=" cursor-pointer hover:border-gray-200 hover:border-2 rounded-md h-auto w-72 p-1">
      <Link key={data?.id} to={"/menscard/:id"}>
        <div>
          <img src={img} alt="" className="size-80" />
        </div>
      </Link>
      <div className="flex justify-center my-2 w-[100%] h-11">
        <button
          className="text-white hover:text-black hover:border-solid hover:border-2 hover:border-gray-200 hover:bg-white p-2 px-16 tracking-widest rounded-sm text-xl"
          onClick={addproduct}
        >
          Add to Cart
        </button>
      </div>
      <div>
        <p className="text-base text-gray-500 font-medium">{title}</p>
      </div>
      <div className="my-1">
        <p className="text-xl ">Rs. {price}</p>
      </div>
      <div>
        <p className="text-base text-gray-500">{option.join("   , ")}</p>
      </div>
    </div>
  );
};

export default Menscard;
