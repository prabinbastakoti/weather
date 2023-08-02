import "./styles/main.css";
import fetchData from "./functions/fetchData";
import searchIcon from "./assets/search.png";
import githubLogo from "./assets/github.png";

const location = "bharatpur nepal";

fetchData(location);

const icon = document.querySelector("#searchIcon");

icon.src = searchIcon;

const githubLogoElement = document.querySelector("#githubLogo");

githubLogoElement.src = githubLogo;
