const formDataE4 = document.getElementById("ejercicio-4");
let palabrasArray = [];

formDataE4.addEventListener("submit", (e) => {
  e.preventDefault();

  let palabrasIngresadas = formDataE4.querySelector("#palabras").value;

  palabrasIngresadas.split(",").forEach((p) => {
    palabrasArray.push(p.trim().toLowerCase());
  });

  let pala = formDataE4.querySelector("#palabra").value.toLowerCase();
  let resultado;

  if (verificar(pala)) {
    resultado = `La palabra ${pala} fue encontrada.`;
  } else {
    resultado = `La palabra ${pala} NO fue encontrada.`;
  }

  formDataE4.querySelector("#showDisplayE4").textContent = resultado;
});

function verificar(palabra) {
  return palabrasArray.includes(palabra);
}
