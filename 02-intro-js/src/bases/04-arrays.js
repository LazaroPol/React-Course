//Arrays en JS
// const arreglo = new Array(100);
const arreglo = [1,2,3,4];                                  //[1,2,3,4]

let arreglo2 = [...arreglo, 5];                             //[1,2,3,4,5]
// arreglo2.push(5);
const arreglo3 = arreglo2.map(function (numero) {           //[2,4,6,8,10]
        return numero * 2;
});


console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)