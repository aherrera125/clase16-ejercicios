const formDataE10 = document.getElementById("ejercicio10");

formDataE10.addEventListener("submit", (e) => {
  e.preventDefault();

  password = () => {
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

    return unsort(pass);
  };

  formDataE10.querySelector(
    "#showDisplayE10"
  ).textContent = `La contraseña generada es: ${password()}`;
});

unsort = (pass) => {
  let passArray = pass.split("");
  passArray.sort(() => Math.random() - 0.5);

  return passArray.join("");
};
