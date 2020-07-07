import express, { request, response } from 'express'

const app = express() //CRIAÇÃO DA APLICAÇÃO

app.get("/users", (req, res) => {
    
    res.json([
        'diego',
        'robson'
        

    ])
})

//porta que a aplicação vai estar "escutando"
app.listen(3333)