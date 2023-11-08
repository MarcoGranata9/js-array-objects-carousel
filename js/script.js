const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const items = document.querySelector(".items")
const thumbs = document.querySelector(".thumbs")

let imgString = ""
let thumbString = ""

for (let i = 0; i < images.length; i++) {
    const imageObj = images[i];
    imgString += `
    <div class="item">
        <img src="/${imageObj.image}" alt="">
        <h3>${imageObj.title}</h3>
        <p>${imageObj.text}</p>
    </div>
    `
    thumbString += `
    <div class="thumb">
    <img src="/${imageObj.image}" alt="">
    </div>
    `
}

items.innerHTML += imgString
thumbs.innerHTML = thumbString

const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")
const imgArray = document.querySelectorAll(".item")
const thumbArray = document.querySelectorAll(".thumb")

let currIndex = 0;
imgArray[currIndex].classList.add("active")
thumbArray[currIndex].classList.add("active")

let interval = setInterval(nextImage, 3000)

nextBtn.addEventListener("click", function() {
    clearInterval(interval)
    nextImage()
    interval = setInterval(nextImage, 3000)
})

prevBtn.addEventListener("click", function() {
    clearInterval(interval)
    prevImage()
    interval = setInterval(nextImage, 3000) 
})




//******************** FUNZIONI ***********************
function nextImage() {
    imgArray[currIndex].classList.remove("active")
    thumbArray[currIndex].classList.remove("active")
    if (currIndex < imgArray.length - 1) {
        currIndex++
    } else {
        currIndex = 0
    }
    imgArray[currIndex].classList.add("active")
    thumbArray[currIndex].classList.add("active")
}

function prevImage() {
    imgArray[currIndex].classList.remove("active")
    thumbArray[currIndex].classList.remove("active")
    if (currIndex > 0) {
        currIndex--
    } else {
        currIndex = imgArray.length - 1
    }
    imgArray[currIndex].classList.add("active")
    thumbArray[currIndex].classList.add("active")
}