const formDataE9 = document.getElementById("ejercicio9");

formDataE9.addEventListener("submit", (e) => {
  e.preventDefault();

  let personas = [
    { nombre: "Juan", edad: 27 },
    { nombre: "Agustina", edad: 17 },
    { nombre: "Emilia", edad: 32 },
    { nombre: "Federico", edad: 19 },
  ];

  let masJoven = personaMasJoven(personas);
  let promedioTotal = promedioEdades(personas);

  function personaMasJoven(personas) {
    let edad = 100;
    for (let i = 0; i < personas.length; i++) {
      if (personas[i].edad < edad) {
        edad = personas[i].edad;
      }
    }
    return personas.filter((p) => p.edad == edad);
  }

  function promedioEdades(personas) {
    let edadPromedio = 0;
    for (let i = 0; i < personas.length; i++) {
      edadPromedio += parseInt(personas[i].edad);
    }
    return edadPromedio / parseInt(personas.length);
  }

  formDataE9.querySelector("#showDisplayE9").textContent = "VER LA CONSOLA.";

  console.log(
    `La persona más jóven es ${masJoven[0].nombre} y tienen ${masJoven[0].edad} años.`
  );

  console.log(`La edad promedio es ${promedioTotal}`);
});
