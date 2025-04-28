let numeros = [];
let soma = 0;

for (let i = 0; i < 10; i++) {
  let numero = parseFloat(prompt(`Digite o ${i + 1} número:`));
  numeros.push(numero);
  soma += numero;
}

console.log("Números:");
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

let media = soma / numeros.length;
console.log(`Média dos números: ${media}`);
