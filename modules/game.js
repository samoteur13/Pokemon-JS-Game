import { Hero } from '../modules/personnage.js';
import { Mouve } from './deplacements.js';
import {random} from '../customDependences/random.js';


console.log(random(3))
let player = new Hero('samy', 0, 0, '<img id="playerSprite" src="/css/image/sprites_player/Overworld_Topdresseur_♂_NB.png" width="100%">')
document.getElementById('C' + player.positionX + player.positionY).innerHTML = player.image



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let combat = 0

