let diceBtn = document.querySelector(".btn-dice"),
  id = document.querySelector("#advice-id"),
  advice = document.querySelector(".advice"),
  height = document.querySelector(".height");
// let height = advice.clientHeight;
// advice.style.height = `${height}px`;
height.style.height = advice.clientHeight + "px";

diceBtn.addEventListener("click", getAdvice);

function getAdvice() {
  // advice.style.height = `${height}px`;
  console.log("clicked");
  diceBtn.classList.add("animate-spin");

  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      // advice.style.height = `0`;
      advice.innerHTML = "";
      let slip = data.slip;
      advice.innerHTML = `"${slip.advice}"`;
      id.innerHTML = `ADVICE #${slip.id}`;
      advice.style.height = "fit-content";
      height.style.height = advice.clientHeight + "px";

      diceBtn.classList.remove("animate-spin");
      advice.style.height = "100%";
    });
}

window.onresize = () => {
  advice.style.height = "fit-content";
  height.style.height = advice.clientHeight + "px";
};
