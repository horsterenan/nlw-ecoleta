import express from 'express'
import routes from './routes'
const app = express() //CRIAÇÃO DA APLICAÇÃO

app.use(express.json());

app.use(routes)

//porta que a aplicação vai estar "escutando"
app.listen(3333)