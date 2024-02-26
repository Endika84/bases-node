

const users= [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
];

const getUserById = (id, callback) => {
    // return users.find( user => user.id == id);
    const user= users.find( user => user.id == id );

    user 
        ? callback(null, user)
        : callback(`USUARIO no encontrado ${id}`);
};

module.exports = {
    getUserById
}