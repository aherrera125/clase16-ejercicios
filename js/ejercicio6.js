const formDataE6 = document.getElementById("ejercicio6");
formDataE6.addEventListener("submit", function (e) {
  e.preventDefault();

  let primoArray = [];

  for (let i = 0; i < 100; i++) {
    if (esPrimo(i + 1)) {
      primoArray.push(i + 1);
    }
  }

  formDataE6.querySelector(
    "#showDisplayE6"
  ).textContent = `Los números primos de 1 a 100 son: ${primoArray}`;
});

function esPrimo(numero) {
  if (numero < 2) return false; // 0 y 1 no son primos

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false; // si tiene un divisor, no es primo
    }
  }
  return true; // si no encontramos divisores, es primo
}
