var num = [5,8,2,9,3]

//É um método interno de todo elemento que é um vetor, coloca os valores em orden
num.sort()

/*Adiciona um valor na última posição do vetor, o num.sort() não teve
  efeito pq o número foi inserido depois do comando*/
num.push(1)

console.log(num)
console.log('---------------------------------------------------------------------------------')


//mostra quantas posições tem um vetor
console.log(`1°) O vetor tem ${num.length} posições`)
console.log('---------------------------------------------------------------------------------')

//mostra o valor de uma posição especifica, o numero da posição fica entre os conchetes
console.log(`2°) O primeiro valor do vetor é ${num[0]}`)
console.log('---------------------------------------------------------------------------------')

//Usando  um laço de repetição para mostrar todos os números dentro do vetor
for(var posicao = 0; posicao < num.length; posicao++) {
    console.log(`3°) ${num[posicao]} é o número na posição ${posicao}`)
}
console.log('---------------------------------------------------------------------------------')


/*Simplificando a exposição de todos valores dentro do vetor, essa forma do for só funciona 
pra váriaveis compostas e para objetos*/
for(var posicao in num){
    console.log(`4°) ${num[posicao]} é o número na posição ${posicao}`)
}
console.log('---------------------------------------------------------------------------------')


/*Procura pelo valor e retorna o numero da posição onde ele se localiza. Caso não esxista o número
 que foi escolhido irá retornar o número -1*/
var posicao = num.indexOf(9)
if(posicao == -1){
  console.log('5°) O valor não foi encontrado!')
} else {
  console.log(`5°) O número está na posição ${posicao}`)
}

console.log('---------------------------------------------------------------------------------')


