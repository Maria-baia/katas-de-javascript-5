// implemente aqui as funções de teste
// 1
function testeReverseString1() {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
 testeReverseString1()
 function testeReverseString2() {
    let result = reverseString("Maria Fernanda");
    let expected = "adnanreF airaM";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
 testeReverseString2()
 function reverseString(string){
    let result = ''
    for(i=string.length-1; i>=0; i--){
        result += string[i]
    }
    return result
 }

 //2
 function testReverseSentence1 () {
    let result = reverseSentence("bob likes dogs");
    let expected = "dogs likes bob";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
 testReverseSentence1()
 function testReverseSentence2 () {
    let result = reverseSentence("I love the mountains");
    let expected = "mountains the love I";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
 testReverseSentence2()
 function reverseSentence(sentence){
    let result = ''
    let strings = sentence.split(' ')
    for(i=strings.length-1; i>0; i--){
        result += strings[i] + ' '
    }
    return result+=strings[0]
 }

//3
 function testMinimumValue1 () {
   let result = minimumValue([2, 4, 6, 8, 10]);
   let expected = 2;
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMinimumValue1()
function testMinimumValue2 () {
   let result = minimumValue([12, 32, 54, 6, 8, 89, 64, 64, 6]);
   let expected = 6;
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMinimumValue2()
function minimumValue(array){
   let result = array[0]
   for(i=0; i<array.length; i++){
      if(array[i] < result){
         result = array[i]
      }
   }
   return result
}

//4
function testMaximumValue1 () {
   let result = maximumValue([12, 3, 5, 68, 9, 6, 73, 44, 456, 65, 321]);
   let expected = 456;
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMaximumValue1()
function testMaximumValue2 () {
   let result = maximumValue([43, 42, 4, 8, 55, 21, 2, 45]);
   let expected = 55;
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMaximumValue2()
function maximumValue(array){
   let result = array[0]
   for(i=0; i<array.length; i++){
      if(array[i] > result){
         result = array[i]
      }
   }
   return result
}

//5
function testCalculateRemainder1 () {
   let result = calculateRemainder(20, 8);
   let expected = 4;
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testCalculateRemainder1()
function testCalculateRemainder2 () {
   let result = calculateRemainder(30, 10);
   let expected = 0;
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testCalculateRemainder2()
function calculateRemainder(a, b){
   let result = a % b
   return result
}

//6
function testDistinctValues1 () {
   let result = distinctValues("1 3 5 3 7 3 1 1 5");
   let expected = "1 3 5 7";
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testDistinctValues1()
function testDistinctValues2 () {
   let result = distinctValues("99 99 99 9 10 11");
   let expected = "99 9 10 11";
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testDistinctValues2()
function distinctValues(string){
   let result = []
   let numeros = string.split(' ')
   for(i=0; i<numeros.length; i++){
      if(result.includes(numeros[i]) === false){
         result.push(numeros[i])
      }
   }
   return result.join(' ')
}

//7
function testCountValues1 () {
   let result = countValues("1 3 5 3 7 3 1 1 5");
   let expected = "1(3) 3(3) 5(2) 7(1)";
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testCountValues1()
function testCountValues2 () {
   let result = countValues("2 4 6 4 8 4 2 2 6");
   let expected = "2(3) 4(3) 6(2) 8(1)";
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testCountValues2()
function countValues(string){
   let result = []
   let numeros = string.split(' ') 
   for(i=0; i<numeros.length; i++){
      let count = 0
      if(result.includes(numeros[i]) === false){
         for(j=0; j<numeros.length; j++){
            if(numeros[i] === numeros[j]){
               count ++
            }
         }
         result.push(numeros[i])
         result.push('(' + count + ')')
         result.push(' ')
      }
   }
   let ultimo = result.pop()
   return result.join('')
}

//8
function testEvaluateExpression1() {
   let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
   let expected = -3
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testEvaluateExpression1()
function testEvaluateExpression2() {
   let result = evaluateExpression("a - b - c + d", {a: 2, b: 8, c: 4, d: 15});
   let expected = 5
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testEvaluateExpression2()
function evaluateExpression(string, obj){
   let valores = Object.values(obj)
   let chaves = Object.keys(obj)
   let expressao = ''
   for(i=0; i<string.length; i++){
      for(j=0; j<chaves.length; j++){
         if(string[i] == chaves[j]){
            expressao += valores[j]
            if(string[i+2] != undefined){
               expressao += string[i+2]
            }
         }
      }
   }
   return eval(expressao)
}