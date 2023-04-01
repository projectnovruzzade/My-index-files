let preloader = document.getElementById("preloader");
let section = document.getElementById("section-1");
let images = ["url(image/bg-image.jpg)","url(image/bg-image2.jpg)","url(image/bg-image3.jpg)","url(image/bg-image4.jpg)"];
let counter = 1;

window.onload = function() {
       setTimeout(() => {
           preloader.style.opacity = "1";
           preloader.style.visibility = "hidden";
           preloader.style.display = "none";
       }, 800); 
       document.querySelector(".text-box").style = "opacity: 1";
       document.querySelector(".btn-box").style = "opacity: 1";
       document.querySelector(".overlay").style = "background-color: rgb(0 0 0 / 42%)";
};

  setInterval(function(){
      if(counter == images.length) {
        counter = 0;   
      } 
      section.style.backgroundImage = images[counter];
      counter++;
  },9500);
  



