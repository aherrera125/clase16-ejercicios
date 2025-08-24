const formDataE3 = document.getElementById("ejercicio-3");
formDataE3.addEventListener("submit", (e) => {
  e.preventDefault();

  let parArray = [];
  let imparArray = [];
  let numero = 0;

  for (let i = 0; i < 10; i++) {
    numero = Math.floor(Math.random() * 100) + 1;
    calcular(numero);
  }
  formDataE3.querySelector(
    "#showDisplayE3"
  ).textContent = `La cantidad de pares es: ${parArray.length} (${parArray}), y la cantidad de impares es: ${imparArray.length} (${imparArray})`;

  function calcular(num) {
    if (num % 2 == 0) {
      parArray.push(num);
    } else {
      imparArray.push(num);
    }
  }
});
