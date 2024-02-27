import axios from 'axios';

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

export const httpClientPlugin= {
    get: async(url: string) => {
        const {data} = await axios.get(url);
        return data;
        // const resp = await fetch(url);
        // return await resp.json();
    },
    post: async(url: string, body: any) => {},
    put: async(url: string, body: any) => {},
    delete: async(url: string) => {}
};