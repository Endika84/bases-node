
import { httpClient } from "../plugins";

export const getPokemonByID = async(id: string|number): Promise<string> => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    //! Promesa antigua
    // fetch(url).then(response => {
    //     response.json().then( pokemon => {
    //         //console.log(pokemon.name);
    //         callback && callback(pokemon.name);
    //     })
    // });

    // return fetch(url)
    //     .then(resp => resp.json())
    //     //.then(() => {throw new Error('Pokemon no existe')})
    //     .then(pokemon => pokemon.name)

    // const resp = await fetch(url);
    // const pokemon = await resp.json();
    const pokemon= await httpClient.get(url);

    return pokemon.name;
}