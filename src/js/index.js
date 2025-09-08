/* Your JS here. */
document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello World!");
  const redbutton = document.querySelector(".red_button");
  const graybutton = document.querySelector(".gray_button");
  const yellowbutton = document.querySelector(".yellow_button");
  const bgColor = document.querySelector(".background");
  const Image = document.querySelector("img");
  const fold = document.querySelector(".fold");
  redbutton.addEventListener("click", () => {
    bgColor.style.backgroundColor = "red";
  });

  yellowbutton.addEventListener("click", () => {
    bgColor.style.backgroundColor = "yellow";
  });

  graybutton.addEventListener("click", () => {
    bgColor.style.backgroundColor = "gray";
  });

  Image.addEventListener("click", () => {
    //used AI for this:
    if (fold.style.display === "none") {
      fold.style.display = "block";
    } else {
      fold.style.display = "none";
    }
  });
});
