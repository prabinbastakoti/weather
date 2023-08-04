import "./styles/main.css";
import fetchData from "./functions/fetchData";
import homepage from "./pages/homepage";

const location = "bharatpur nepal";

fetchData(location);
homepage();
