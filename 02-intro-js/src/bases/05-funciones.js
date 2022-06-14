//Funciones JS


// const saludar = function (nombre) {
//     return `Hola, ${ nombre}`;
// }

const saludar2 = (nombre) =>{
    return `Hola, ${ nombre}`;
}

const saludar3 = (nombre) => `Hola, ${ nombre}`;
const saludar4 = () => `Hola Mundo`
// console.log(saludar ('Goku') )

console.log(saludar2 ('Vegeta') );
console.log(saludar3 ('Goku') );
console.log(saludar4 () );

const getUser = () => ({
    
        uid: 'ACBD1234',
        username: 'El_Papi1502'

    
});

const user = getUser();
console.log(user);

// Tarea
// 1. Transformar a flecha
// 2. Tiene que retornar el objeto implicito
// 3. Probarlo

function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC3123',
        username: nombre
    }
    
};
const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);


const getUsuarioActivo = (nombre) => ({uid: 'ABC3123', username: nombre})
console.log(getUsuarioActivo);