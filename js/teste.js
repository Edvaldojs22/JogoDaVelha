const boxs = document.querySelectorAll('.box')
const optios = document.querySelectorAll('.options p')
const scoreX = document.querySelector('#x')
const scoreO = document.querySelector('#o')

const reload = document.querySelector('#reload').addEventListener('click', () => {
    scoreX.textContent = ''
    scoreO.textContent = ''
    player.style.display = 'none'
    gaming.style.display = 'none'
    containerOptions.style.display = 'block'

})



const player = document.querySelector('.player')

const clearFrame = document.querySelector('#clearboard')
const gaming = document.querySelector('#container')
const containerOptions = document.querySelector('.containerOptions')

let controlPlayer = ''
let scoreValueX = 1
let scoreValueO = 1

optios.forEach((tag) => {
    tag.addEventListener('click', (event) => {
        if (event.target.id == "optionX") {
            player.style.display = 'block'
            player.textContent = "Vez do X"
            controlPlayer = "PlayerX"
            console.log(controlPlayer)

        } else {
            player.style.display = 'block'
            player.textContent = "Vez do O"

            controlPlayer = "JogadorO"

        }
        containerOptions.style.display = 'none'
        gaming.style.display = 'flex'

    })
})



let possibilities = [
    ['box1', 'box2', 'box3'],
    ['box4', 'box5', 'box6'],
    ['box7', 'box8', 'box9'],
    ['box1', 'box4', 'box7'],
    ['box2', 'box5', 'box8'],
    ['box3', 'box6', 'box9'],
    ['box1', 'box5', 'box9'],
    ['box3', 'box5', 'box7']
]


let playerX = []
let playerO = []

const check = (player) => {
    possibilities.some((possibility) => {
        if (possibility.every(box => player.includes(box))) {
            clearGaming()
            if (controlPlayer == 'PlayerX') {
                scoreX.textContent = scoreValueX++
            } else {
                scoreO.textContent = scoreValueO++
            }
        }
    })
}

boxs.forEach((box) => {
    box.addEventListener('click', (event) => {
        if (controlPlayer == 'PlayerX') {
            event.target.textContent = 'X'
            playerX.push(event.target.id);
            check(playerX);
            controlPlayer = 'PlayerO';
            player.textContent = "Vez do O"
        } else {
            event.target.textContent = 'O'
            playerO.push(event.target.id);
            check(playerO);
            controlPlayer = 'PlayerX';
            player.textContent = "Vez do X"
        }
        clearFrame.style.display = 'flex'

    });

});

const clearGaming = () => {
    playerX.splice(0, playerX.length)
    playerO.splice(0, playerO.length)
    boxs.forEach((tag) => {
        tag.textContent = ''
    })
}


clearFrame.addEventListener('click', clearGaming)






