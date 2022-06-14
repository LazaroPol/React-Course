import heroes, { owners } from '../data/heroes.js';//importación por defecto (heroes)


// console.log(owners);                                             //CON EL IF

// const getHeroeById = (id) =>{
//     return heroes.find (( heroe )=>{
//         if (heroes.id === id){
//             return true; 
//         }
        
//     });
// }

// FIND Y FILTER

export const getHeroeById = (id) => heroes.find (( heroe ) => heroe.id === id );
            
// console.log(getHeroeById(2));

export const getHeroeByOwner = (owner) => heroes.filter (( heroe ) => heroe.owner === owner );

// console.log(getHeroeByOwner('DC'));