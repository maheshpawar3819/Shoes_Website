import { womensbanner } from "./Utils/images";
import Womenscard from "./Womenscard";
import Shimmer from "./Shimmer";
import useWomensshoes from "./Hooks/useWomensshoes";
import { useSelector } from "react-redux";
const Womens = () => {
  const data = useSelector((store) => store.products.newWomensshoes);
  useWomensshoes();

  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="box-border mt-24">
      <div>
        <img src={womensbanner} alt="" />
      </div>
      <div className="flex flex-wrap justify-center gap-4 w-full">
        {data.map((resp, index) => {
          return <Womenscard key={index} data={resp} />;
        })}
      </div>
    </div>
  );
};

export default Womens;
