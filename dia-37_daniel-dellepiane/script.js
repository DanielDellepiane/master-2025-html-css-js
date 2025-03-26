// Ejercicio 1
// let container = document.getElementById('container');
// let carrouselr = document.getElementById('carrouselr');
// let carrousels = document.querySelectorAll('.carrousel').length;
// let buttons = document.getElementsByClassName('btn');

// let currentPosition = 0;
// let carrouselsPerPage = 0;

// function setParams() {
//     let w = container.offsetWidth;
//     if (w < 551) carrouselsPerPage = 1;
//     else if (w < 901) carrouselsPerPage = 2;
//     else if (w < 1101) carrouselsPerPage = 3;
//     else carrouselsPerPage = 4;

//     document.documentElement.style.setProperty('--total-slides', carrousels);
//     document.documentElement.style.setProperty('--slides-per-page', carrouselsPerPage);
//     updatePosition();
// }

// function updatePosition() {
//     carrouselr.style.transform = `translateX(-${(100 / carrouselsPerPage) * currentPosition}%)`;
//     buttons[0].classList.toggle('inactive', currentPosition === 0);
//     buttons[1].classList.toggle('inactive', currentPosition >= carrousels - carrouselsPerPage);
// }

// function carrouselRight() {
//     currentPosition = (currentPosition + 1) % carrousels;
//     updatePosition();
// }

// function carrouselLeft() {
//     currentPosition = (currentPosition - 1 + carrousels) % carrousels;
//     updatePosition();
// }

// window.addEventListener("resize", setParams);
// setParams();

// Ejercicio 2-3
const slider = document.querySelector(".slider");
const btnLeft = document.getElementById("moveLeft");
const btnRight = document.getElementById("moveRight");
const indicators = document.querySelectorAll(".indicator");

let baseSliderWidth = slider.offsetWidth;
let activeIndex = 0; 

let singles = [
  {
    src:
      "./assets/image1.webp",
  },
  {
    src:
      "./assets/image2.webp",
  },

  {
    src:
      "./assets/image3.webp",
  },

  {
    src:
      "./assets/image1.webp",
  },
  {
    src:
      "./assets/image2.webp",
  },
  {
    src:
      "./assets/image3.webp",
  },
  {
    src:
      "./assets/image1.webp",
  },
  {
    src:
      "./assets/image2.webp",
  },
  {
    src:
      "./assets/image3.webp",
  },
  {
    src:
      "./assets/image1.webp",
  },
  {
    src:
      "./assets/image2.webp",
  },
  {
    src:
      "./assets/image3.webp",
  },
  {
    src:
      "./assets/image3.webp",
  },
  {
    src:
      "./assets/image1.webp",
  },

  {
    src:
      "./assets/image2.webp",
  },
  {
    src:
      "./assets/image3.webp",
  },
  {
    src:
      "./assets/image1.webp",
  },
  {
    src:
      "./assets/image2.webp",
  },
];


function populateSlider() {
  singles.forEach((image) => {
   
    const newsingle = document.getElementById("single0");
    let clone = newsingle.cloneNode(true);
    let img = clone.querySelector("img");
    img.src = image.src;

    slider.insertBefore(clone, slider.childNodes[slider.childNodes.length - 1]);
  });
}

populateSlider();
populateSlider();


const initialsingle = document.getElementById("single0");
initialsingle.remove();


function updateIndicators(index) {
  indicators.forEach((indicator) => {
    indicator.classList.remove("active");
  });
  let newActiveIndicator = indicators[index];
  newActiveIndicator.classList.add("active");
}


btnLeft.addEventListener("click", (e) => {
  let singleWidth = document.querySelector(".single").getBoundingClientRect()
    .width;
  let scrollDistance = singleWidth * 6; 

  slider.scrollBy({
    top: 0,
    left: -scrollDistance,
    behavior: "smooth",
  });
  activeIndex = (activeIndex - 1) % 3;
  console.log(activeIndex);
  updateIndicators(activeIndex);
});


btnRight.addEventListener("click", (e) => {
  let singleWidth = document.querySelector(".single").getBoundingClientRect()
    .width;
  let scrollDistance = singleWidth * 6; 

  console.log(`singleWidth = ${singleWidth}`);
  console.log(`scrolling right ${scrollDistance}`);


  if (activeIndex == 2) {

    populateSlider();
    slider.scrollBy({
      top: 0,
      left: +scrollDistance,
      behavior: "smooth",
    });
    activeIndex = 0;
    updateIndicators(activeIndex);
  } else {
    slider.scrollBy({
      top: 0,
      left: +scrollDistance,
      behavior: "smooth",
    });
    activeIndex = (activeIndex + 1) % 3;
    console.log(activeIndex);
    updateIndicators(activeIndex);
  }
});

