// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {
  // skriv din kode her...
  let number = 5;
  let minValue = 0;
  let maxValue = 10;
  let plusButton = document.querySelector("#btn-count-increase");
  let minusButton = document.querySelector("#btn-count-decrease");
  let textCountElement = document.querySelector("#text-count");

  function updateNumber() {
    textCountElement.textContent = number;
  }
  updateNumber();

  function checkMinMaxValue(direction) {
    if (direction === "inc" && number < maxValue) {
      number++;
      updateNumber();
    }

    if (direction === "dec" && number > minValue) {
      number--;
      updateNumber();
    }
  }

  plusButton.addEventListener("click", () => checkMinMaxValue("inc"));
  minusButton.addEventListener("click", () => checkMinMaxValue("dec"));
}); // Afslutter: DOMContentLoaded
