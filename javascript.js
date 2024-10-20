let usuario = document.getElementById("usuario");
let clave = document.getElementById("clave");

document.getElementById("myButton").addEventListener("click", function () {
  if (usuario.value === "richard") {
    console.log("muy gay");
  }

  //Fizzbass
  if (clave.value % 3 === 0 && clave.value % 2 === 0) {
    console.log("El que lo lea es gay y si no lees tambien");
  } else if (clave.value % 2 === 0) {
    console.log("el que lo lea es gay");
  } else if (clave.value % 3 === 0) {
    console.log("y si no lees tambien");
  }

  // Otra cosa
  if (usuario.value === "reyes") {
    console.log("naguebona te pasaste de gay");
  } else if (usuario.value == "richard reyes") {
    console.log(" gay");
  }
});
