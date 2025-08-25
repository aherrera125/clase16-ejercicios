const formDataE10 = document.getElementById("ejercicio10");

formDataE10.addEventListener("submit", (e) => {
  e.preventDefault();

  let contraseña = () => {
    let letras = "abcdefghijklmnopqrstuvwxyz";

    let indice1 = Math.floor(Math.random() * letras.length);
    let mayuscula = letras[indice1].toUpperCase();

    let indice2 = 0;
    let minuscula = "";
    for (let i = 0; i < 4; i++) {
      indice2 = Math.floor(Math.random() * letras.length);
      minuscula += letras[indice2].toLowerCase();
    }

    let numero = Math.floor(Math.random() * 99 + 1);

    let simbolos = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    let indice3 = Math.floor(Math.random() * simbolos.length);
    let simbolo = simbolos[indice3];

    return mayuscula + minuscula + numero + simbolo;
  };

  formDataE10.querySelector(
    "#showDisplayE10"
  ).textContent = `La contraseña generada es: ${contraseña()}`;
});
