const mongoose = require('mongoose');

/* Creating a post model */


const Schema = mongoose.Schema;

const postSchema = new Schema({
  content: { type: String, required: true },
  heading: String,
  lead: String,
  author: String,
  id: Number,
});

postSchema.statics.savePost = async function savePost(postContent){
	
	const post = this;

	if(!postContent) throw new Error("Post cannot be empty");

	return post.create({ content: postContent.content, heading: postContent.heading, lead: postContent.lead, author: postContent.author }, function(err, data) {
		err ? console.log(err) : console.log(data)
	});
};

postSchema.statics.getPosts = async function getPosts(){
	return this.find();
}
  
module.exports = mongoose.model('Post', postSchema);