const formDataE1 = document.getElementById("ejercicio1");

formDataE1.addEventListener("submit", (e) => {
  e.preventDefault();

  let numero = formDataE1.querySelector("#numero-e1").value;
  let myArray = [];

  for (let i = 1; i <= 10; i++) {
    //myArray.push(numero + " x " + i + " = " + numero * i);
    myArray.push(` ${numero} x ${i} = ${numero * i}`);
  }

  formDataE1.querySelector("#showDisplayE1").textContent = myArray;
});
