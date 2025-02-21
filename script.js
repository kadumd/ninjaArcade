const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
const vidaPlayer1 = document.querySelector('#vida-player1')
const vidaPlayer2 = document.querySelector('#vida-player2')
const numeroTirado = document.querySelector('p')
const button = document.querySelector('button')
let contagemMusica = 0

function sortearQualPlayerTomaODano(min, max) {
    if (contagemMusica === 0) {
        const musicaDoCombate = new Audio('./audio/bgm.mp3')
        musicaDoCombate.play()
        contagemMusica++
    }

    let sorteio = Math.floor(Math.random() * (max - min + 1)) + min;
    if (sorteio === 1) {
        loop(1, 20)
        sortearDano(1, 20, player1)
    } else {
        loop(1, 20)
        sortearDano(1, 20, player2)
    }
}

function loop(min, max) {
    let contagemLoop = 0
    setInterval(() => {
        if (contagemLoop < 20) {
            let sorteio = Math.floor(Math.random() * (max - min + 1)) + min;
            numeroTirado.textContent = sorteio
            contagemLoop++
        }
    }, 100);
}

function sortearDano(min, max, playerAnonimo) {
    setTimeout(() => {
        let sorteio = Math.floor(Math.random() * (max - min + 1)) + min;
        numeroTirado.textContent = sorteio
        if (playerAnonimo === player1) {
            player1.classList.add('player1-animation')
            const musicaDoCombate = new Audio('./audio/blue.mp3')
            musicaDoCombate.play()
            setTimeout(() => {
                player1.classList.remove('player1-animation')
            }, 500);

            let quantidadeDeVida = vidaPlayer1.clientWidth
            let vidaAtual = quantidadeDeVida - sorteio
            vidaPlayer1.style.width = vidaAtual + "px"
            if (vidaAtual <= 0) {
                window.alert("player1 perdeu o combat")
            }
        }

        if (playerAnonimo === player2) {
            player2.classList.add('player2-animation')
            const musicaDoCombate = new Audio('./audio/red.mp3')
            musicaDoCombate.play()
            setTimeout(() => {
                player2.classList.remove('player2-animation')
            }, 500);

            let quantidadeDeVida = vidaPlayer2.clientWidth
            let vidaAtual = quantidadeDeVida - sorteio
            vidaPlayer2.style.width = vidaAtual + "px"
            if (vidaAtual <= 0) {
                window.alert("player2 perdeu o combat")
            }
        }
    }, 2000);
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