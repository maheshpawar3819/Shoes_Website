import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { delivertruck } from "../Utils/icons";
const Mensdetail = () => {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(1);

  const fetchapi = () => {
    axios
      .get(
        "https://svc-3-usf.hotyon.com/search?q=&apiKey=01c29538-1ba1-44af-b8d2-270a5cfc7fc0&country=IN&locale=en&getProductDescription=0&collection=375646355687&skip=0&take=24&sort=-date"
      )
      .then((response) => {
        console.log(response);
        console.log(response?.data?.data?.items[0].id);
        setData(response?.data?.data?.items[0]);
      })
      .catch((error) => {
        console.log("oops someting wants rong");
      });
  };

  useEffect(() => {
    fetchapi();
  }, []);

  return (
    <div className="mt-32 w-[90vw] m-auto flex">
      {/* image container */}
      <div className="w-[55vw] h-[100vh] flex p-2">
        {/* small images */}
        <div className="">
          {data?.images?.map((img, index) => {
            return (
              <div key={index}>
                <img
                  src={img?.url}
                  alt="samll images"
                  className="size-52  h-auto p-1"
                />
              </div>
            );
          })}
        </div>
        {/* large image  */}
        <div className="h-screen w-screen">
          <img
            src={data?.images?.[0].url}
            alt="large image"
            className="h-screen p-3 pl-10"
          />
        </div>
      </div>
      {/* second container  */}
      <div className="w-[35vw] h-[100vh]">
        <h1 className="text-2xl">{data?.title}</h1>
        <p className="text-xl text-red-500">
          Price Rs : {data?.variants?.[0]?.price}
        </p>
        <p className="text-gray-400 text-xs my-1">inclusive of all Taxes</p>
        <hr className="my-3"></hr>
        <div>
          <p className="my-2">Size</p>
          <div>
            <h1 className="text-xl text-gray-800 my-2">
              {data?.title}/{data?.options?.[0]?.values?.[0]}
            </h1>
          </div>
          <div className="flex">
            {data?.options?.[1]?.values?.map((data, index) => {
              return (
                <div key={index}>
                  <button className="p-2 border-2 border-gray-300 m-2 px-5  hover:bg-black hover:text-white">
                    {data}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="my-3">
            <p>Quantity</p>
            <div>
              <button
                className="p-2 border-2 border-gray-300 m-2 px-5  hover:bg-gray-300 hover:text-white"
                onClick={() => {
                  setNumber(number - 1);
                }}
              >
                -
              </button>
              <button className="p-2 border-2 border-gray-300 m-2 px-5  hover:bg-gray-300 hover:text-white">
                {number}
              </button>
              <button
                className="p-2 border-2 border-gray-300 m-2 px-5  hover:bg-gray-300 hover:text-white"
                onClick={() => {
                  setNumber(number + 1);
                }}
              >
                +
              </button>
              <div>
                <p className="my-2">
                  {delivertruck}
                  Check delivery at your location
                </p>
                <input
                  type="text"
                  placeholder="inter your pincode"
                  className="p-2 rounded-md"
                />
                <button
                  className="p-2 border-2 border-black ml-2 rounded-md hover:bg-black hover:text-white"
                  onClick={() => {
                    return alert(
                      "sorry delivery not available in your location"
                    );
                  }}
                >
                  Check
                </button>
              </div>
              <div className="w-full mt-3">
                <button className="w-[45%] border-2 rounded-sm m-2  border-gray-300 p-2 text-gray-600 font-bold hover:bg-black hover:text-white">
                  ADD TO CART
                </button>
                <button className="w-[45%] border-2 rounded-sm m-2  border-gray-300 p-2 text-gray-600 font-bold hover:bg-black hover:text-white">
                  BUY IT NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mensdetail;
