import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addwomensshoes } from "../Utils/productsslice";

const useWomensshoes = () => {
  const dispatch = useDispatch();
  const fetchapi = () => {
    axios
      .get(
        "https://svc-3-usf.hotyon.com/search?q=&apiKey=01c29538-1ba1-44af-b8d2-270a5cfc7fc0&country=IN&locale=en&getProductDescription=0&collection=375646585063&skip=0&take=24&sort=-date"
      )
      .then((response) => {
        // console.log(response?.data?.data?.items || []);
        dispatch(addwomensshoes(response?.data?.data?.items || []))
      })
      .catch(() => {
        console.log("error was found");
      });
  };

  useEffect(() => {
    fetchapi();
  }, []);
};

export default useWomensshoes;
