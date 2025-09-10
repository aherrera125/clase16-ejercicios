const formDataE10 = document.getElementById("ejercicio10");

formDataE10.addEventListener("submit", (e) => {
  e.preventDefault();

  let password = () => {
    let lyric = "abcdefghijklmnopqrstuvwxyz";

    let index1 = Math.floor(Math.random() * lyric.length);
    let upperCase = lyric[index1].toUpperCase();

    let index2 = 0;
    let lowerCase = "";
    for (let i = 0; i < 4; i++) {
      index2 = Math.floor(Math.random() * lyric.length);
      lowerCase += lyric[index2].toLowerCase();
    }

    let number = Math.floor(Math.random() * 99 + 1);

    let symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    let index3 = Math.floor(Math.random() * symbols.length);
    let symbol = symbols[index3];

    let pass = upperCase + lowerCase + number + symbol;

    // Convertimos el string en array
    let passArray = pass.split("");

    // Usamos sort con Math.random()
    passArray.sort(() => Math.random() - 0.5);

    // Volvemos a unir el array en un string
    return passArray.join("");
  };

  formDataE10.querySelector(
    "#showDisplayE10"
  ).textContent = `La contraseña generada es: ${password()}`;
});
