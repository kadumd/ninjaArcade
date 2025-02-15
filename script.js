const musicaDoCombate = new Audio('./audio/bgm.mp3')
musicaDoCombate.play()

const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
const vidaPlayer1 = document.querySelector('#vida-player1')
const vidaPlayer2 = document.querySelector('#vida-player2')
const numeroTirado = document.querySelector('p')
const button = document.querySelector('button')


function sortearQualPlayerTomaODano(min, max) {
    let sorteio = Math.floor(Math.random() * (max - min + 1)) + min;
    if (sorteio === 1) {
        player1.classList.add('player1-animation')
        const musicaDoCombate = new Audio('./audio/blue.mp3')
        musicaDoCombate.play()
        sortearDano(1, 20, player1)
        setTimeout(() => {
            player1.classList.remove('player1-animation')
        }, 500);
    } else {
        player2.classList.add('player2-animation')
        const musicaDoCombate = new Audio('./audio/red.mp3')
        musicaDoCombate.play()
        sortearDano(1, 20, player2)
        setTimeout(() => {
            player2.classList.remove('player2-animation')
        }, 500);
    }
}

function sortearDano(min, max, playerAnonimo) {
    let sorteio = Math.floor(Math.random() * (max - min + 1)) + min;
    numeroTirado.textContent = sorteio
    if (playerAnonimo === player1) {
        let quantidadeDeVida = vidaPlayer1.clientWidth
        let vidaAtual = quantidadeDeVida - sorteio
        vidaPlayer1.style.width = vidaAtual + "px"
        if (vidaAtual <= 0) {
            window.alert("player1 perdeu o combat")
        }
    }

    if (playerAnonimo === player2) {
        let quantidadeDeVida = vidaPlayer2.clientWidth
        let vidaAtual = quantidadeDeVida - sorteio
        vidaPlayer2.style.width = vidaAtual + "px"
        if (vidaAtual <= 0) {
            window.alert("player2 perdeu o combat")
        }
    }
}

button.addEventListener('click', () => {
    sortearQualPlayerTomaODano(1, 2)
})









// function sortearNumero(min, max) {
//     // Gera um número aleatório entre min (inclusivo) e max (exclusivo)
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Exemplo de uso:
// const numeroSorteado = sortearNumero(1, 10);
// console.log(`Número sorteado: ${numeroSorteado}`);