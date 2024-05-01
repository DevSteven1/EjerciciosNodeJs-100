const readLine = require("node:readline")

const rl = readLine.createInterface({
	input:process.stdin,
	output:process.stdout
});

rl.question("Ingrese un numero: ", (num)=>{
	let fac = 1;
	for(let i = num; i>1;i--){
		fac=fac*i;
	}
	console.log(`El Factorial del numero ${num} es: ${fac}`)
	rl.close()
})
