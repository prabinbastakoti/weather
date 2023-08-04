import searchIcon from "../assets/search.png";
import githubLogo from "../assets/github.png";
import leftArrowIcon from "../assets/left-arrow.png";
import rightArrowIcon from "../assets/right-arrow.png";

const homepage = () => {
  const icon = document.querySelector("#searchIcon");
  icon.src = searchIcon;

  const githubLogoElement = document.querySelector("#githubLogo");
  githubLogoElement.src = githubLogo;

  const leftArrow = document.querySelector("img#leftArrow");
  leftArrow.src = leftArrowIcon;
  leftArrow.style.visibility = "hidden";

  const rightArrow = document.querySelector("img#rightArrow");
  rightArrow.src = rightArrowIcon;

  const arrows = document.querySelectorAll("[data-carousal-button]");

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const offset = arrow.dataset.carousalButton === "next" ? 1 : -1;

      const carousals = Array.from(document.querySelectorAll(".carousal"));

      const activSlide = document.querySelector("[data-active]");

      const currentIndex = carousals.indexOf(activSlide);

      if (currentIndex + offset < 0 || currentIndex + offset > 3) return;

      carousals[currentIndex].removeAttribute("data-active");

      carousals[currentIndex + offset].dataset.active = true;

      const newActivSlide = document.querySelector("[data-active]");

      if (carousals.indexOf(newActivSlide) === 0) {
        leftArrow.style.visibility = "hidden";
      } else {
        leftArrow.style.visibility = "visible";
      }
      if (carousals.indexOf(newActivSlide) === 3) {
        rightArrow.style.visibility = "hidden";
      } else {
        rightArrow.style.visibility = "visible";
      }
    });
  });

  const celsius = document.querySelector("button#celsius");
  const fahrenheit = document.querySelector("button#fahrenheit");

  celsius.addEventListener("click", () => {
    celsius.classList.add("active");
    fahrenheit.classList.remove("active");
  });

  fahrenheit.addEventListener("click", () => {
    fahrenheit.classList.add("active");
    celsius.classList.remove("active");
  });
};

export default homepage;
