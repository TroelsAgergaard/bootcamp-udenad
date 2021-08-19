// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {
  // skriv din kode her...
  function hils(navn) {
    return `Hej med dig ${navn}`;
  }
  let hilsResultat = hils("Magnus");

  console.log(hilsResultat);
}); // Afslutter: DOMContentLoaded
