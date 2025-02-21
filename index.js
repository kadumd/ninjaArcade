const http = require('http')
const fs = require('fs')

const servidor = http.createServer((pedido, resposta) => {
    console.log(pedido.url)
    switch (pedido.url) {
        case '/':
            resposta.writeHead(200, { "Content-Type": "text/html" });
            resposta.end(fs.readFileSync('./index.html'));
            break

        case '/style.css':
            resposta.writeHead(200, { "Content-Type": "text/css" });
            resposta.end(fs.readFileSync('./style.css'));
            break

        case '/script.js':
            resposta.writeHead(200, { "Content-Type": "text/javascript" });
            resposta.end(fs.readFileSync('./script.js'));
            break

        case '/img/bg.gif':
            resposta.writeHead(200, { "Content-Type": "image/gif" });
            resposta.end(fs.readFileSync('./img/bg.gif'));
            break

        case '/img/icon.png':
            resposta.writeHead(200, { "Content-Type": "image/png" });
            resposta.end(fs.readFileSync('./img/icon.png'));
            break

        case '/img/p1.gif':
            resposta.writeHead(200, { "Content-Type": "image/gif" });
            resposta.end(fs.readFileSync('./img/p1.gif'));
            break

        case '/img/p2.gif':
            resposta.writeHead(200, { "Content-Type": "image/gif" });
            resposta.end(fs.readFileSync('./img/p2.gif'));
            break

        case '/audio/bgm.mp3':
            resposta.writeHead(200, { "Content-Type": "audio/mp3" });
            resposta.end(fs.readFileSync('./audio/bgm.mp3'));
            break

        case '/audio/red.mp3':
            resposta.writeHead(200, { "Content-Type": "audio/mp3" });
            resposta.end(fs.readFileSync('./audio/red.mp3'));
            break

        case '/audio/blue.mp3':
            resposta.writeHead(200, { "Content-Type": "audio/mp3" });
            resposta.end(fs.readFileSync('./audio/blue.mp3'));
            break
    }
})

servidor.listen(3000)