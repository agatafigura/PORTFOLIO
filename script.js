"use strict";

//typewriter

let maxNumberOfIterations;
let iterator;
let character;
let typewriter = document.querySelector("#typewriter").textContent;
document.querySelector("#typewriter").textContent = "";
console.log(typewriter);

init();

function init() {
    maxNumberOfIterations = typewriter.length;
    console.log(maxNumberOfIterations);
    iterator = 0;
    loop();
}

function loop() {
    console.log("loop", iterator);
    character = typewriter[iterator];
    document.querySelector("#typewriter").textContent += character;
    iterator++;
    if(iterator < maxNumberOfIterations) {
        setTimeout(loop,100);
    }
}

//carousel 

const carouselImages = document.querySelector(".carousel-images");
const carouselButtons = document.querySelectorAll(".carousel-button");
const numberOfImages = document.querySelectorAll(".carousel-images img").length;
let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    if (window.innerWith > 767) {
      if (event.target.id === "previous") {
        if (imageIndex !== 1) {
          imageIndex--;
          translateX += 500;
          console.log(imageIndex);
        }
      } else {
        if (imageIndex !== numberOfImages) {
          imageIndex++;
          translateX -= 500;
          console.log(imageIndex);
        }
      }
    } else {
      if (event.target.id === "previous") {
        if (imageIndex !== 1) {
          imageIndex--;
          translateX += 333;
          console.log(imageIndex);
        }
      } else {
        if (imageIndex !== numberOfImages) {
          imageIndex++;
          translateX -= 333;
          console.log(imageIndex);
        }
      }
    }
    if (imageIndex === 1) {
      document.querySelector("#project1-description").classList.remove("hidden");
      document.querySelector("#project1-description").style.display = "flex";
      document.querySelector("#project3-description").style.display = "none";
      document.querySelector("#project2-description").style.display = "none";
      document.querySelector("#project3-description").classList.add("hidden");
      document.querySelector("#project2-description").classList.add("hidden");
      document.querySelector("#previous").classList.add("hidden");
      
    }

    if (imageIndex === 2) {
      document.querySelector("#project1-description").classList.add("hidden");
      document.querySelector("#project3-description").classList.remove("hidden");
      document.querySelector("#project3-description").style.display = "flex";
      document.querySelector("#project1-description").style.display = "none";
      document.querySelector("#project2-description").style.display = "none";
      document.querySelector("#project2-description").classList.add("hidden");
      document.querySelector("#previous").classList.remove("hidden");
      document.querySelector("#next").classList.remove("hidden");
    }

    if (imageIndex === 3) {
      document.querySelector("#project1-description").classList.add("hidden");
      document.querySelector("#project3-description").classList.add("hidden");
      document.querySelector("#project2-description").classList.remove("hidden");
      document.querySelector("#project2-description").style.display = "flex";
      document.querySelector("#project1-description").style.display = "none";
      document.querySelector("#project3-description").style.display = "none";
      document.querySelector("#next").classList.add("hidden");
    }


    carouselImages.style.transform = `translateX(${translateX}px)`;
  });
});


//hamburger menu

const hamburger = document.querySelector("#hamburger");
const navUL = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
});