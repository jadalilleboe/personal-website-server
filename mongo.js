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


const post2 = new Post({
    title: "Blog Post Test", 
    content: "<p>Hello! I am trying out my blogging API that I just created. I want to see if I can add images or anything like that.</p><br><a href=\"http://google.com\">This is a link</a><br><p>This is some more text</p><p>This is a picture of a monkey</p><img src=\"https://ichef.bbci.co.uk/images/ic/1200x675/p01snr0c.jpg\"></img>",
	excerpt: "This is essentially a 	 test for my blog API and server.",
    date: new Date()
})
post2.save().then(result => {
    console.log("added ppost")
	mongoose.connection.close()
})


