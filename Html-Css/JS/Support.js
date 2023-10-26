const menu = document.querySelector(".list");
const btn = document.querySelector(".menu_btn");

// console.log(btn);

btn.addEventListener('click',function () {
    menu.classList.toggle('active');



    console.log('open');
});


const frm = document.querySelector('.form');



frm.addEventListener('submit', function (e) {
    e.preventDefault();

    const namee = document.getElementById('fn');
    const mail = document.getElementById('em');
  


    if (namee.value == "") {
        namee.nextElementSibling.style.display = "block"
    }else{
        namee.nextElementSibling.style.display = "none"
    }
    if (mail.value == "" || !mail.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        mail.nextElementSibling.style.display = "block"
    }else{
        mail.nextElementSibling.style.display = "none"
    }
})
    



