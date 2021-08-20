// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {
  // skriv din kode her...
  let navne = ["Troels", "Mads", "Louise"];
  let navneNy = ["Mikkel", "Pernille", "Anna"];
  let ulElement = document.querySelector("#liste");

  function doImportantStuff(array) {
    array.forEach((navn) => {
      ulElement.innerHTML += `<li> ${navn} </li>`;
    });
  }

  doImportantStuff(navne);
  doImportantStuff(navneNy);
}); // Afslutter: DOMContentLoaded
