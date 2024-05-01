const readLine = require("node:readline")
const pc = require("picocolors")

const rl = readLine.createInterface({
	input:process.stdin,
	output:process.stdout
});

rl.question("Ingrese un numero: ",(num)=>{
	
	for(let i=0;i<11;i++){
		console.log(`${num} * ${i} = ${num*i}`)
	}
	
	rl.close()
})
