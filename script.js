function startSurprise(){

const music = document.getElementById("bgMusic");

music.volume = 0;
music.play();

let volume = 0;

const fade = setInterval(() => {

if(volume < 0.6){
volume += 0.02;
music.volume = volume;
}

else{
clearInterval(fade);
}

},200);


/* reveal sections */

document.getElementById("messageSection").style.display="flex";
document.getElementById("gallery").style.display="flex";
document.getElementById("finalMessage").style.display="flex";

/* scroll down */

window.scrollTo({
top:window.innerHeight,
behavior:"smooth"
});

}


/* reveal photos while scrolling */

window.addEventListener("scroll",function(){

const reveals = document.querySelectorAll(".reveal");

reveals.forEach((el)=>{

const windowHeight = window.innerHeight;
const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
el.classList.add("active");
}

});

});

window.addEventListener("scroll", () => {
  const photos = document.querySelectorAll(".photo");

  photos.forEach(photo => {
    const position = photo.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      photo.classList.add("show");
    }
  });
});


let heartInterval = null;

window.addEventListener("scroll", function() {

const finalSection = document.getElementById("finalMessage");
const position = finalSection.getBoundingClientRect().top;
const screenHeight = window.innerHeight;

if(position < screenHeight - 100){

/* start hearts */

if(!heartInterval){
heartInterval = setInterval(createHeart, 400);
}

}

else{

/* stop hearts */

clearInterval(heartInterval);
heartInterval = null;

}

});

function createHeart(){

const heart = document.createElement("div");
heart.classList.add("end-heart");
heart.innerHTML = "💜";

heart.style.left = Math.random() * 100 + "%";

document.getElementById("endHearts").appendChild(heart);

setTimeout(() => {
heart.remove();
},4000);

}