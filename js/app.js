import { Pokemons_info, offset, limit } from '../modules/module.js';
import { Hero } from '../modules/personnage.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let combat = 0


let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}=&offset=` + offset * limit

let player = new Hero('samy', 0, 0, '<img id="playerSprite" src="/css/image/sprites_player/Overworld_Topdresseur_♂_NB.png" width="100%">')
document.getElementById('C' + player.positionX + player.positionY).innerHTML = player.image


let display_pokedex = document.getElementById('display_pokedex');
let display_carte = document.getElementById('display_carte');
let is_pokedex = true

let pokemons = document.getElementById('pokemon');
let carte = document.getElementById('carte');


//ouvre le pokedex
display_pokedex.onclick = function () {
  is_pokedex = true
  pokemons.classList.remove("is-hidden")
  carte.classList.add("is-hidden")
}

//ouvre la carte
display_carte.onclick = function () {
  is_pokedex = false
  pokemons.classList.add("is-hidden")
  carte.classList.remove("is-hidden")
}



document.onkeydown = checkKey;

function checkKey(e) {
  let lePlayer = document.getElementById('playerSprite')
  e = e || window.event;

  if (e.keyCode == '38') {
    // up arrow
    if (player.positionX > 0) {
      player.positionX -= 1
      document.getElementById('C' + player.positionX + player.positionY).appendChild(playerSprite)
      combat = getRandomInt(3)
      if(combat == 2){
        console.log("combat")
      }
    }
  }
  else if (e.keyCode == '40') {
    // down arrow
    if (player.positionX < 4) {
      player.positionX += 1
      document.getElementById('C' + player.positionX + player.positionY).appendChild(playerSprite)
    }
    combat = getRandomInt(3)
    if(combat == 2){
      console.log("combat")
    }
  }
  else if (e.keyCode == '37') {
    // left arrow
    if (player.positionY > 0) {
      player.positionY -= 1
      document.getElementById('C' + player.positionX + player.positionY).appendChild(playerSprite)
    }
    combat = getRandomInt(3)
    if(combat == 2){
      console.log("combat")
    }
  }
  else if (e.keyCode == '39') {
    // right arrow
    if (player.positionY < 4) {
      player.positionY += 1
      document.getElementById('C' + player.positionX + player.positionY).appendChild(playerSprite)
    }
    combat = getRandomInt(3)
    if(combat == 2){
      console.log("combat")
    }
  }

}



try {
  await Pokemons_info.getPokemon(url)
} catch {
  console.log(err.message)
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
      }
    }

  }

}



Pokemons_info.getEnnemie()

