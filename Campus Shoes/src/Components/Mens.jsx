import { mensbanner } from "./Utils/images";
import Menscard from "./Menscard";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";
import useMens from "./Hooks/useMens";

const Mens = () => {
  const data = useSelector((store) => store.products.newMens);
  useMens();

  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="box-border mt-24">
      <div>
        <img src={mensbanner} alt="" />
      </div>
      <div className="flex flex-wrap justify-center  gap-4 w-full">
        {data.map((resp) => {
          return <Menscard key={resp.id} data={resp} />;
        })}
      </div>
    </div>
  );
};

export default Mens;
