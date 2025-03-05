import { useSelector } from "react-redux";
import Cartcard from "./Cartcard";
const Cart = () => {
  const showdata = useSelector((store) => store.cart.addcart);
  return (
    <div className="mt-24 m-auto w-[90vw] ">
      {showdata.length === 0 ? (
        <h1 className="mt-36 text-4xl text-center p-80">
          Your cart is currently empty. Start shopping to add items here!
        </h1>
      ) : (
        showdata.map((data) => {
          return <Cartcard key={data.id} info={data} />;
        })
      )}
    </div>
  );
};

export default Cart;
