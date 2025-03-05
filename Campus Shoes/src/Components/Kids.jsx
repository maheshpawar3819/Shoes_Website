import { kidsbanner } from "./Utils/images";
import Kidscard from "./Kidscard";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";
import useKids from "./Hooks/useKids";
const Kids = () => {
  const data = useSelector((store) => store.products.newKidsshoes);

  useKids();

  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="box-border mt-24">
      <div>
        <img src={kidsbanner} alt="" />
      </div>
      <div className="flex flex-wrap justify-center  gap-4 w-full">
        {data.map((resp, index) => {
          return <Kidscard key={index} data={resp} />;
        })}
      </div>
    </div>
  );
};

export default Kids;
