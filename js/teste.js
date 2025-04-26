const boxs = document.querySelectorAll('.box')
const optios = document.querySelectorAll('.options p')

const clearFrame = document.querySelector('#clearboard')
const gaming = document.querySelector('#container')
const containerOptions = document.querySelector('.containerOptions')

let controlPlayer = ''

optios.forEach((tag) => {
    tag.addEventListener('click', (event) => {
        if (event.target.id == "optionX") {
            controlPlayer = "JogadorX"
            console.log(controlPlayer)
        } else {
            controlPlayer = "JogadorO"
            console.log(controlPlayer)
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
            console.log(`O jogador ${controlPlayer} Venceu`)
        }
    })
}

boxs.forEach((box) => {
    box.addEventListener('click', (event) => {
        if (controlPlayer == 'PlayerX') {
            event.target.textContent = 'X'
            playerX.push(event.target.id);
            check(playerX);
            console.log(playerX);
            controlPlayer = 'PlayerO';
        } else {
            event.target.textContent = 'O'
            playerO.push(event.target.id);
            check(playerO);
            controlPlayer = 'PlayerX';
        }
        clearFrame.style.display = 'flex'
    });
    
});



