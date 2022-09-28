import { Pokemon } from './template.js'
import {random}  from '../customDependences/random.js';

export let offset = 0

export let limit = 30



export class Pokemons_info {



    // permet de passer outre l'objet 
    static async getPokemon() {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}=&offset=` + offset * limit

        fetch(url)
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < data.results.length; i++) {
                    let poke_info = fetch(data.results[i].url).then(response => response.json().then(info => {
                        Pokemon.drawPKmn(info)

                        // console.log(info.types[0].type.name)
                    }))
                }
                offset += 1
            })
    }

    static async getEnnemie() {
        let url = ('https://pokeapi.co/api/v2/pokemon/'+random(151) )

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })

    }

}
