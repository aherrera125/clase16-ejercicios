const formDataE8 = document.getElementById("ejercicio-8");

formDataE8.addEventListener("submit", (e) => {
  e.preventDefault();

  let numero = generarNumero();
  let resultado;

  function generarNumero() {
    return Math.floor(Math.random() * 100) + 1;
  }

  switch (numero) {
    case numero % 3 == 0:
      resultado = "Fizz";
      break;
    case numero % 5:
      resultado = "Buzz";
      break;
    case numero % 3 == 0 && numero % 5 == 0:
      resultado = "FizzBuzz";
      break;
    default:
      resultado = numero;
      break;
  }

  formDataE8.querySelector("#showDisplayE8").textContent = resultado;
});
