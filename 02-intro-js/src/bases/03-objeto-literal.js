const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 53553534,
        lat:14.3224,
        lng: 34.097878
    }
};




const persona2 ={...persona};  //Si quiero clonar un objeto, abriré llaves y con ... y el nombre del objeto, se clonará
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);


