// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {
  // skriv din kode her...
  let number = 5;
  let maxValue = 10;
  let minValue = 0;
  let plusButton = document.querySelector("#btn-count-increase");
  let minusButton = document.querySelector("#btn-count-decrease");
  let textCountElement = document.querySelector("#text-count");

  function updateNumber() {
    textCountElement.textContent = number;
  }

  updateNumber();

  plusButton.addEventListener("click", () => {
    if (number < maxValue) {
      number++;
      updateNumber();
    }
  });

  minusButton.addEventListener("click", () => {
    if (number > minValue) {
      number--;
      updateNumber();
    }
  });
}); // Afslutter: DOMContentLoaded
