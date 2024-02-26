const axios = require('axios');

//esto seria para enviar autentificacion con headers
// const buildHttpClient = (headers) => {
//     return{
//         get: async(url) => {
//             const {data} = await axios.get(url, headers);
//             return data;
//             // const resp = await fetch(url);
//             // return await resp.json();
//         },
//         post: async(url, body) => {},
//         put: async(url, body) => {},
//         delete: async(url) => {}
//     }
// }

const httpClientPlugin = {
    get: async(url) => {
        const {data} = await axios.get(url);
        return data;
        // const resp = await fetch(url);
        // return await resp.json();
    },
    post: async(url, body) => {},
    put: async(url, body) => {},
    delete: async(url) => {}
};

module.exports = {
    http: httpClientPlugin,
}