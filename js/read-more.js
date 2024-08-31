document.addEventListener("DOMContentLoaded", function () {
  const readMoreBtns = document.querySelectorAll(".read-more");
  const moreTexts = document.querySelectorAll(".more-text");
  const dots = document.querySelectorAll(".dots");

  readMoreBtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      if (moreTexts[index].style.display === "none") {
        moreTexts[index].style.display = "inline";
        dots[index].style.display = "none";
        btn.textContent = "Back";
      } else {
        moreTexts[index].style.display = "none";
        dots[index].style.display = "inline";
        btn.textContent = "Read more";
      }
    });
  });
});
