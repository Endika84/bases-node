//const { v4: uuidv4 } = require('uuid');
//const {getUUID} = require('../plugins/get-id.plugin');
//const getAge = require('get-age');
//const {getAge} = require('../plugins/get-age.plugin');
//const {getAge, getUUID} = require('../plugins'); //no hace falta poner el index en los archivos de barril

// const obj= {
//         name: 'John',
//         birthdate: '1984-10-21'
//     };

const buildMakePerson = ({getUUID, getAge}) => {
    return ({name, birthdate}) => {

        return{
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate)
        }
    }
}



// const john = buildPerson(obj);
// console.log(john);

module.exports = {
    buildMakePerson,
}