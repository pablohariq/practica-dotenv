const express = require('express')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
app.use(express.json())
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"))
})

app.post("/login", (req, res) => {
    const body = req.body


    res.end()
})


app.listen(3000, () => console.log("Servidor iniciado en el puerto 3000"))