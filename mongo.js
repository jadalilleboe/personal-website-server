const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
	.then(() => {
		console.log('connected to MongoDB')
	})
	.catch((error) => {
		console.log('error connecting to MongoDB:', error.message)
	})

const postSchema = new mongoose.Schema({
    id: Number,
    title: String,
    content: String,
    date: { type: Date, default: Date.now },
})

postSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
})

const Post = mongoose.model('Post', postSchema)

const post = new Post({
    title: "My First Blog Post", 
    content: "This is my my first blog post. Yippee.",
    date: new Date()
})

post.save().then(result => {
    console.log("added ppost")
})

mongoose.connection.close()