const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese una cadena de texto: ", (text) => {
  let esPalindromo = true;

  for (let i = 0; i < text.length / 2; i++) {
    if (text[i] !== text[text.length - 1 - i]) {
      esPalindromo = false;
      break; // Salir del bucle tan pronto como se detecte que no es un palíndromo
    }
  }

  if (esPalindromo) {
    console.log("Es un palíndromo");
  } else {
    console.log("No es un palíndromo");
  }

  rl.close();
});
