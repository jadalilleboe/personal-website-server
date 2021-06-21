require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Post = require('./models/post')

const app = express()

morgan.token('body', (req) => JSON.stringify(req.body))

app.use(express.json())
app.use(express.static('build'))
app.use(morgan(':method :url :status :res[content-length] :body'))
app.use(cors())

app.get('/api/posts', (request, response) => {
    Post.find({}).then(posts => {
        response.json(posts)
    })
})

app.get('/api/posts/:id', (request, response) => {
    Post.findById(request.params.id) 
        .then(post => {
            if (post) {
                response.json(post)
            } else {
                response.status(404).end()
            }
        })
})

app.post('/api/posts', (request, response) => {
        const body = request.body
        const post = new Post({
            title: body.title,
            content: body.content,
            excerpt: body.excerpt,
            date: new Date()
        })
        post
            .save()
            .then(savedPost => {
                response.json(savedPost)
            })
    }
)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})