const boxs = document.querySelectorAll('.box')
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
let controlPlayer = 'PlayerX'

boxs.forEach((box) => {
    box.addEventListener('click', (event) => {
        if (controlPlayer == 'PlayerX') {
            event.target.textContent = 'X'
            playerX.push(event.target.id);
            check(playerX);
            console.log(playerX);
            controlPlayer = 'PlayerO';
            console.log(event.target)
        } else {
            event.target.textContent = 'O'
            playerO.push(event.target.id);
            check(playerO);
            console.log(playerO);
            controlPlayer = 'PlayerX';
        }
    });
});



