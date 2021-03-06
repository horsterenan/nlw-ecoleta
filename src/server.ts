import express from 'express'
import routes from './routes'
import path from 'path'
import cors from 'cors'

const app = express() //CRIAÇÃO DA APLICAÇÃO

app.use(cors())
app.use(express.json());



app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

//porta que a aplicação vai estar "escutando"
app.listen(3333)

