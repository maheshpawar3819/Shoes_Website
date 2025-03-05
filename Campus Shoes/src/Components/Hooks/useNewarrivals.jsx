import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNewarrivals } from "../Utils/productsslice";

const useNewarrivals = () => {
  const dispatch = useDispatch();
  const fetch = () => {
    axios
      .get(
        "https://svc-3-usf.hotyon.com/search?q=&apiKey=01c29538-1ba1-44af-b8d2-270a5cfc7fc0&country=IN&locale=en&getProductDescription=0&collection=423418167527&skip=0&take=24&sort=bestselling"
      )
      .then((response) => {
        // console.log(response);
        // console.log(response?.data?.data?.items[0].title);
        dispatch(addNewarrivals(response?.data?.data?.items || []));
      })
      .catch((error) => {
        console.log("woops something wants wrong", error);
      });
  };

  useEffect(() => { 
    fetch();
  }, []);
};

export default useNewarrivals;
