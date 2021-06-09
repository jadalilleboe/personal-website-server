require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

morgan.token('body', (req) => JSON.stringify(req.body))

app.use(express.json())
app.use(express.static('build'))
app.use(morgan(':method :url :status :res[content-length] :body'))
app.use(cors())

app.get('/api/posts')