const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
require('dotenv').config()

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
    _id: Number,
    title: String,
    content: String,
	excerpt: {
		type: String,
		maxLength: 200
	},
    date: { type: Date, default: Date.now },
})

postSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
})

postSchema.plugin(AutoIncrement)

const Post = mongoose.model('Post', postSchema)

const post1 = new Post({
    title: "My First Blog Post", 
    content: "This is my my first blog post. Yippee.",
	excerpt: "first blog post",
    date: new Date()
})
const post2 = new Post({
    title: "My Second Blog Post", 
    content: "This is my my second blog post. Yippee.",
	excerpt: "second blog post",
    date: new Date()
})

post1.save().then(result => {
    console.log("added ppost")
})
post2.save().then(result => {
    console.log("added ppost")
	mongoose.connection.close()
})


