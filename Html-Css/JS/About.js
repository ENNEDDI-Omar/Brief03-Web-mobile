const menu = document.querySelector(".list");
const btn = document.querySelector(".menu_btn");

// console.log(btn);

btn.addEventListener('click',function () {
    menu.classList.toggle('active');
    


    console.log('open');
});

 const mainimg = document.querySelector(".mobile .slider img");
 const images = ["/images/image(0).png", "/images/image(1).png","/images/image(2).png","/images/image(3).png"];
 let sld=0;

 function next() {
    sld++;
    if (sld>=images.length) {
        sld=0;
        mainimg.src=images[sld]
        
    }else{
        mainimg.src=images[sld]
    }
    
 };

 function befor() {
    sld--;
    if (sld<0) {
        sld=images.length-1;
        mainimg.src=images[sld]
    
    }else{
        mainimg.src=images[sld]
    }
    
 }