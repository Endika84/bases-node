const getAgePlugin = require('get-age');

export const getAge = (birthdate: string) => {
    // if (!birthdate) {
    //     return new Error('birthdate ir required');
    // }

    return getAgePlugin(birthdate);
}