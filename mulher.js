const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: "Alice Cortez",
        imagem: "https://www.shutterstock.com/image-vector/vector-isolated-cute-cartoon-hedgehog-260nw-2160265523.jpg" ,
        minibio: "texto aleatorio amo"
    })
}
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)
