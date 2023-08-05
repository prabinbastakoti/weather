import homepage from "../pages/homepage";
import fetchData from "./fetchData";

const initialLoad = (currentLocation) => {
  fetchData(currentLocation);
  homepage();
};

export default initialLoad;
