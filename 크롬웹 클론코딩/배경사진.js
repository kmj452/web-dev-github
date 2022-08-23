const images = [
    "배경사진/배경사진1.jpg",
    "배경사진/배경사진2.jpg",
    "배경사진/배경사진3.jpg",
    "배경사진/배경사진4.jpg",
    "배경사진/배경사진5.jpg",
]
const backgroundImage = 
images[Math.round(Math.random()*(images.length -1) )];
const background = document.querySelector("#background");
const backgroundURL = "url('" + backgroundImage + "')"


document.body.style.backgroundImage = backgroundURL;




