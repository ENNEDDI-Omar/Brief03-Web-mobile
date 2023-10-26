const menu = document.querySelector(".list");
const btn = document.querySelector(".menu_btn");

// console.log(btn);

btn.addEventListener('click',function () {
    menu.classList.toggle('active');



    console.log('open');
});