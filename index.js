// formas de importar/exportar modulos
// 1. CommonJS - require
// 2. Import ES6 - import

//const moduloMatematicas = require("./modulos/matematicas.js")
// console.log(moduloMatematicas)

const { factorial, suma } = require("./modulos/matematicas.js")

const fact = factorial(5)
console.log(fact)

const sum = suma(12, 90)
console.log(sum)

// console.log(module)