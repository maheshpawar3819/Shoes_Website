import Sandalscard from "./Sandalscard";
import { sandalsbanner } from "./Utils/images";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";
import useSandels from "./Hooks/useSandels";
const Sandals = () => {
  const data = useSelector((store) => store.products.newSandels);
  useSandels();

  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="box-border mt-24">
      <div>
        <img src={sandalsbanner} alt="" />
      </div>
      <div className="flex flex-wrap gap-4 w-full justify-center">
        {data.map((resp, index) => {
          return <Sandalscard key={index} data={resp} />;
        })}
      </div>
    </div>
  );
};

export default Sandals;
