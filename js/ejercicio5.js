const formDataE5 = document.getElementById("ejercicio-5");

formDataE5.addEventListener("submit", (e) => {
  e.preventDefault();

  let numero = parseInt(formDataE5.querySelector("#numero").value);

  formDataE5.querySelector(
    "#showDisplayE5"
  ).textContent = `El factorial de ${numero} es: ${factorial(numero)}`;
});

function factorial(numero) {
  if (numero < 0) {
    return "El factorial no está definido para números negativos.";
  }

  let resultado = 1;
  for (let i = numero; i > 1; i--) {
    resultado *= i;
  }

  return resultado;
}
