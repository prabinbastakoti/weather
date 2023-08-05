import homepage from "../pages/homepage";
import fetchData from "./fetchData";

const initialLoad = () => {
  const currenLocation = "Bharatpur-Nepal";
  fetchData(currenLocation);
  homepage();
};

export default initialLoad;
