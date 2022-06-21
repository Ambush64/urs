const counter = document.querySelectorAll(".counter");

const counterUp = () => {
  counter.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      //   add + to change it to number
      const count = +counter.innerText;

      const increement = target / 400;

      if (count < target) {
        counter.innerText = Math.ceil(count + increement);
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
};

counterUp();

const myContent = document.querySelector(".offers");

const Data = [
  "Automated Sliding Gates",
  "Aluminium Shutters (Alulux)",
  "Rolling Grills",
  "MS Rolling Shutters",
  "Push and Pull Shutters",
  "Electrically Operated Shutters",
  "Gl Rolling Shutters",
  "Remote controlled Shutters",
  "Automated Grill Shutters",
  "Gear Operated Shutters",
];

window.addEventListener("DOMContentLoaded", function () {
  const showInHtml = Data.map((val, ind) => {
    return `
    <p class="mini-card mx-4 " >
    ${val}
  </p>
        `;
  });

  myContent.innerHTML = showInHtml;
});

// const buttons = document.querySelectorAll("[data-carousel-button]");

// buttons.forEach((e) => {
//   e.addEventListener("click", () => {
//     const offset = e.dataset.carouselButton === "next" ? 1 : -1;

//     const slides = e.closest("[data-carousel]").querySelector("[data-slides]");

//     const activeSlide = slides.querySelector("[data-active]");

//     let newIndex = [...slides.children].indexOf(activeSlide) + offset;

//     if (newIndex < 0) newIndex = slides.children.length - 1;
//     if (newIndex >= slides.children.length) newIndex = 0;

//     slides.children[newIndex].dataset.active = true;
//     delete activeSlide.dataset.active;
//   });
// });

// setInterval(()=>{

// },1000)
