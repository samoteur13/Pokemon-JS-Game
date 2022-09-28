function drawing() {
    samoteur.joueurState(joueur1)

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            let terrain = document.getElementById('C' + i + j)

            if (i === samoteur.positionX && j === samoteur.positionY && terrain.innerHTML === "") {

                terrain.innerHTML = samoteur.image
            } else if (i === samoteur.positionX && j === samoteur.positionY && terrain.innerHTML !== "") {
                if (samoteur.direction === "down") {
                    samoteur.positionX -= 1
                    document.getElementById('C' + samoteur.positionX + samoteur.positionY).innerHTML = samoteur.image
                    mouvement.innerHTML = "Le chemin est bloqué un ennemie est la"
                    mouvement.style.color = "red";

                } else if (samoteur.direction === "up") {
                    samoteur.positionX += 1
                    mouvement.innerHTML = "Le chemin est bloqué un ennemie est la"
                    mouvement.style.color = "red";

                }
                else if (samoteur.direction === "left") {
                    samoteur.positionY += 1
                    mouvement.innerHTML = "Le chemin est bloqué un ennemie est la"
                    mouvement.style.color = "red";

                }
                else if (samoteur.direction === "right") {
                    samoteur.positionY -= 1
                    document.getElementById('C' + samoteur.positionX + samoteur.positionY).innerHTML = samoteur.image
                    mouvement.innerHTML = "Le chemin est bloqué un ennemie est la"
                    mouvement.style.color = "red";

                }
            }
        }

    }
}

//parcourire la grille et verifier si la case est vide si oui avance snn reculer
function goLeft() {
    combat.innerHTML = ""
    mouvement.innerHTML = ""
    samoteur.direction = "left"
    if (samoteur.positionY > 0) {
        positionJoueur1 = document.getElementById('C' + samoteur.positionX + samoteur.positionY)
        positionJoueur1.innerHTML = ""
        samoteur.positionY -= 1
        drawing()
    } else {
        mouvement.innerHTML = "vous ne pouvez pas dépasser les limites du terrain"
        mouvement.style.color = "blue";
    }
}

function goRight() {
    combat.innerHTML = ""
    mouvement.innerHTML = ""
    samoteur.direction = "right"
    if (samoteur.positionY < 4) {
        positionJoueur1 = document.getElementById('C' + samoteur.positionX + samoteur.positionY)
        positionJoueur1.innerHTML = ""
        samoteur.positionY += 1
        drawing()
    } else {
        mouvement.innerHTML = "vous ne pouvez pas dépasser les limites du terrain"
        mouvement.style.color = "blue";
    }
}


function goUp() {
    mouvement.innerHTML = ""
    combat.innerHTML = ""
    samoteur.direction = "up"
    if (samoteur.positionX > 0) {
        positionJoueur1 = document.getElementById('C' + samoteur.positionX + samoteur.positionY)
        positionJoueur1.innerHTML = ""
        samoteur.positionX -= 1
        drawing()
    } else {
        mouvement.innerHTML = "vous ne pouvez pas dépasser les limites du terrain"
        mouvement.style.color = "blue";
    }
}


function goDown() {
    combat.innerHTML = ""
    mouvement.innerHTML = " "
    samoteur.direction = "down"
    if (samoteur.positionX < 4) {
        positionJoueur1 = document.getElementById('C' + samoteur.positionX + samoteur.positionY)
        positionJoueur1.innerHTML = ""
        samoteur.positionX += 1
        drawing()
    } else {
        mouvement.innerHTML = "vous ne pouvez pas dépasser les limites du terrain"
        mouvement.style.color = "blue";
    }
}
