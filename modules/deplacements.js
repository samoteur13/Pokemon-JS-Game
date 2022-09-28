export class Mouve {

    static async checkKey(e) {
        

        let lePlayer = document.getElementById('playerSprite')
        e = e || window.event;

        if (e.keyCode == '38') {
            // up arrow
            if (player.positionX > 0) {
                player.positionX -= 1
                document.getElementById('C' + player.positionX + player.positionY).appendChild(playerSprite)
                combat = getRandomInt(3)
                if (combat == 2) {
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
            if (combat == 2) {
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
            if (combat == 2) {
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
            if (combat == 2) {
                console.log("combat")
            }
        }

    }
}
