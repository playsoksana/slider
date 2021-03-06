const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
let activeSlideIndex = 0;
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;
const container = document.querySelector(".container");
sidebar.style.top = `${-(slidesCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});
downBtn.addEventListener("click", () => {
  changeSlide("down");
});

document.addEventListener("keydown", (ev) => {
  if (ev.key === "ArrowUp") {
    changeSlide("up");
  } else if (ev.key === "ArrowDown") {
    changeSlide("down");
  }
});
function changeSlide(direction) {
  if (direction === "up") {
    if (activeSlideIndex === slidesCount - 1) {
      activeSlideIndex = -1;
    }
    activeSlideIndex += 1;
  } else if (direction === "down") {
    if (activeSlideIndex === 0) {
      activeSlideIndex = slidesCount - 1;
    }
    activeSlideIndex -= 1;
  }
  const height = container.clientHeight;
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
