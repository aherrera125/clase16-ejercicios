let numArray = [];
let suma = 0;

const formDataE2 = document.getElementById("ejercicio2");
formDataE2.addEventListener("submit", (e) => {
  e.preventDefault();

  let numero = parseInt(formDataE2.querySelector("#numero-e2").value);
  numArray.push(numero);

  suma += numero;
  formDataE2.querySelector("#numero-e2").value = "";

  if (numArray.length == 5) {
    formDataE2.querySelector(
      "#showDisplayE2"
    ).textContent = `La suma de todos los numero es: ${suma}`;
    numArray = [];
    suma = 0;
  }
});
