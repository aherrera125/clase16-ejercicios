const formDataE7 = document.getElementById("ejercicio7");
formDataE7.addEventListener("submit", function (e) {
  e.preventDefault();

  let palabra = formDataE7
    .querySelector("#palabra")
    .value.toLowerCase()
    .replace(/\s+/g, "");

  let palabraInvertida = palabra.split("").reverse().join("");
  let display = formDataE7.querySelector("#showDisplayE7");

  if (palabra == palabraInvertida) {
    display.textContent = `La palabra ${palabra} se lee igual de derecho y de revez, por lo tanto es PALINDROMO`;
  } else {
    display.textContent = `La palabra ${palabra} No se lee igual de derecho y de revez`;
  }
});
