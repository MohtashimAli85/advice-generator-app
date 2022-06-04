let diceBtn = document.querySelector(".btn-dice"),
  id = document.querySelector("#advice-id"),
  advice = document.querySelector(".advice"),
  height = document.querySelector(".height");

height.style.height = advice.clientHeight + "px";

diceBtn.addEventListener("click", getAdvice);

function getAdvice() {
  console.log("clicked");
  diceBtn.classList.add("animate-spin");
  let audio = new Audio("./shake-roll-dice.mp3");
  audio.play();
  setTimeout(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        advice.innerHTML = "";
        let slip = data.slip;
        advice.innerHTML = `"${slip.advice}"`;
        id.innerHTML = `ADVICE #${slip.id}`;
        advice.style.height = "fit-content";
        height.style.height = advice.clientHeight + "px";

        diceBtn.classList.remove("animate-spin");
        advice.style.height = "100%";
        audio.pause();
      });
  }, 500);
}

window.onresize = () => {
  advice.style.height = "fit-content";
  height.style.height = advice.clientHeight + "px";
};
