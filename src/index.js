import "./styles/main.css";
import initialLoad from "./functions/initialLoad";
import fetchData from "./functions/fetchData";

let location = "Bharatpur-Nepal";

initialLoad(location);

const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    location = searchBar.value;
    searchBar.value = "";
    fetchData(location);
  }
});

const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");

celsius.addEventListener("click", () => {
  fetchData(location);
});

fahrenheit.addEventListener("click", () => {
  fetchData(location);
});
