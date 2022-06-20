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
  "Aluminium Shutters(Alulux)",
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
