//! Template
// const {emailTemplate} = require('./js-foundation/01-template');
//console.log(emailTemplate);

//! destructuring
// require('./js-foundation/02-destructuring');

//! Callbacks y arrow y su uso
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow_functions');

// const id = 1;

// getUserById(id, (error, user) => {
//     if(error){
//        throw new Error(error); 
//     }
//     console.log(user);
// });

//! factory functions y su uso
// const {buildMakePerson} = require('./js-foundation/05-factory-functions');
// const {getAge, getUUID} = require('./plugins'); //no hace falta poner el index en los archivos de barril

// const obj= {
//         name: 'John',
//         birthdate: '1984-10-21'
//     };

// const makePerson = buildMakePerson({getUUID, getAge});

// const jhon= makePerson(obj);

// console.log({jhon});


//! Promesas y su uso
// const getPokemonByID = require('./js-foundation/06-promises');

// console.log(getPokemonByID(1));
// const bulbasur= async(id) => {
//     return await getPokemonByID(id);
// }

//con callback, promesas no eficientes
// getPokemonByID(1, (pokemonName) => {
//     console.log({pokemonName});
// });

// const pokemonName= getPokemonByID(1);

// getPokemonByID(1)
//     .then(pokemon => console.log({pokemon}))
//     .catch(error => console.log('Por favor intente de nuevo'))
//     .finally(() =>console.log('Finalmente'));

//token de acceso
//publicas

//!winston logger con plugin
// const {buildLogger} = require('./plugins');

// const logger = buildLogger('app.js');

// logger.log('Hola mundo');
// logger.error('Esto es algo malo');