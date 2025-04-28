const numero = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] ;

let maiorNum = numero[0];

for(let i= 0; i < numero.length; i++){
   if (numero[i] > maiorNum)
   {maiorNum = numero[i]}
}
console.log("é o maior numero: ", maiorNum);