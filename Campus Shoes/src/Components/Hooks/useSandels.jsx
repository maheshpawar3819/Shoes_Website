import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSandels } from "../Utils/productsslice";
axios;
useEffect;

const useSandels = () => {
  const dispatch = useDispatch();

  const fetchapi = () => {
    axios
      .get(
        "https://svc-3-usf.hotyon.com/search?q=&apiKey=01c29538-1ba1-44af-b8d2-270a5cfc7fc0&country=IN&locale=en&getProductDescription=0&collection=414506287335&skip=0&take=24&sort=bestselling"
      )
      .then((response) => {
        // console.log(response?.data?.data?.items || []);
        dispatch(addSandels(response?.data?.data?.items || []));
      })
      .catch(() => {
        console.log("Opps something wents wrong");
      });
  };

  useEffect(() => {
    fetchapi();
  }, []);
};

export default useSandels;
