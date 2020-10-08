//importar as dependências
const express = require('express')
const bodyParser = require('body-parser')

//inicializando o express
const app = express()

//configurar a view engine e configurar a pasta publica
app.set('view engine', 'ejs')
app.use(express.static('public'))

//configurar body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//rotas
app.get("/", (req,res)=>{
    res.send("Vai ETIM!!!")
})

//escutar a porta   
app.listen(3000)
