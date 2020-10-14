import express from 'express'
import './database/connection'
import routes from './routes'
import path from 'path'
import 'express-async-errors'
import cors from 'cors'

import errorHandler from './errors/handler'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)


app.listen(process.env.PORT, () => {
  console.log('server running')
})