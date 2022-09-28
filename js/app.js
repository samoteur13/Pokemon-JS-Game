import { Pokemons_info, offset, limit } from '../modules/module.js';




let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}=&offset=` + offset * limit

try {

  await Pokemons_info.getPokemon(url)
} catch {
  console.log(err.message)
} finally {
  console.log('salut les amies')
}


let pokemon = document.getElementById('pokemon')
let first_img = document.getElementById('first_img')






window.onscroll = function () {

  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight + 12) {
    try {

      Pokemons_info.getPokemon(url)
    } catch {
      console.log(err.message);
    } finally {
      console.log('salut les amies')
    }
  }

}