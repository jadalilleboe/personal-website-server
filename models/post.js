const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

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
	excerpt: String,
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

module.exports = mongoose.model('Post', postSchema)