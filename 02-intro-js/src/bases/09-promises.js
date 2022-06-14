//PROMESAS JS 

import { getHeroeById } from "../src/bases/08-imports y exports";
 
 
 
// const promesa = new Promise((resolve, reject) => {
 
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         // console.log(heroe);
//         resolve(heroe);
//         // reject('No se pudo mostrar');
 
//     }, 2000);
 
// });
 
// promesa.then((heroe) => {
//     console.log('heroe', heroe)
 
// })
// .catch(error => console.warn(error))

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
 
        setTimeout(() => {
            const heroe = getHeroeById(id);
            // console.log(heroe);
            // resolve(heroe);
            if (id -6) {
                resolve(heroe)
            } else {
               reject('No se puede mostrar el heroe') 
            }
     
        }, 2000);
     
    });
    }
     
    getHeroeByIdAsync(4)
    .then(console.log)
    .catch(console.warn)