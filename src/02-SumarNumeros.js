const pc = require("picocolors")
const readLine = require("readline")

const rl = readLine.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Ingrese el numero 1: ", (numero1)=>{

	num1 = parseFloat(numero1);

	rl.question("Ingrese el numero 2: ",(numero2)=>{
		num2 = parseFloat(numero2);

		const suma = num1+num2;

		console.log(pc.green(`La suma de ${num1} + ${num2} es : ${suma}`));

		rl.close();
	})
});
