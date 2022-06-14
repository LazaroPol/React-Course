

//Desestructuracíon de arrays

const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log(personajes[0]);

const [ , , p3 ] = personajes; //Escoger que posición de la Array mostrar usando espacio y , 

console.log(p3);

const returnArray = () => {
    return ['ABC', 123];
}
// const arr = returnArray();
// console.log(arr)

const [letras, numeros] = returnArray(); //Así sería la desestructuración de objetos en Arrays
console.log(letras, numeros);

//Tarea
// 1.El primer valor de la array se llamará nombre
// 1.El segundo valor de la array se llamará setNombre

const usarState = (valor) => {
    return [ valor,()=>{ console.log('Hola Mundo') } ];

}

const [nombre, setNombre] = usarState('Goku');


// arr[1]();
console.log(nombre);
setNombre();
