import { Pokemons_info, offset, limit } from '../modules/module.js';
let pokedex = document.getElementById('pokedex');
let pokemons = document.getElementById('pokemon');
let carte = document.getElementById('carte');
let is_pokedex = true


pokedex.onclick = function(){
  is_pokedex = true
  pokemons.classList.remove("is-hidden")
}

carte.onclick = function () {
  is_pokedex = false
  pokemons.classList.add("is-hidden")
}

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


if (is_pokedex) {

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

}



