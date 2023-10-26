const menu = document.querySelector(".list");
const btn = document.querySelector(".menu_btn");

// console.log(btn);

btn.addEventListener("click", function () {
  menu.classList.toggle("active");

  console.log("open");
});

const FAQ = document.querySelectorAll("FAQ");
  FAQ.forEach( function (item) {
  item.addEventListener("click", function () {
    item.classList.toggle("active");
    let para = item.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});
