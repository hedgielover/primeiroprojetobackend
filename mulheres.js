const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: "posdpaojs",
        img: "",
        minibio: "djsopadpaod",
    },
    {
        nome: "oi oi",
        img: "",
        minibio: "japdjsad",
    },
    {
        nome: "djspoddoas",
        img: "",
        minibio: "dljaopsd",
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostraPorta)
