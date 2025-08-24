const formDataE6 = document.getElementById("ejercicio6");
formDataE6.addEventListener("submit", function (e) {
  e.preventDefault();

  let primoArray = [];
  for (let i = 1; i <= 100; i++) {
    if (calcularPrimo(i)) {
      primoArray.push(i);
    }
  }

  function calcularPrimo(numero) {
    if (numero % 1 == 0 && numero % numero == 0) {
      return true;
    }
  }

  formDataE6.querySelector("#showDisplayE6").textContent = primoArray;
});
