export class Pokemon {

    static async drawPKmn(pkmn) {
        //recupère le template
        let template = document.querySelector('#productrow')
        //clonage du template
        let templateClone = document.importNode(template.content, true)
        //Récupere et remplis le nom du pokemon
        let pkmnName = templateClone.getElementById('pokemon_name')
        pkmnName.innerText = pkmn.name
        let pokemon_img = templateClone.getElementById('pokemon_img')
        pokemon_img.src =  pkmn.sprites.front_default
        let pokemon_img_back = templateClone.getElementById('pokemon_img_back')
        pokemon_img_back.src =  pkmn.sprites.back_default
        let pokemon_types = templateClone.getElementById('pokemon_type')
        pokemon_types.innerText = pkmn.types[0].type.name
        let pokemon_container = document.getElementById('pokemon')
        pokemon_container.appendChild(templateClone)

    }

}