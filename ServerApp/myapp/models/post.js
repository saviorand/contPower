const mongoose = require('mongoose');

/* Creating a post model */


const Schema = mongoose.Schema;

const postSchema = new Schema({
  content: { type: String, required: true },
  id: Number,
});

postSchema.statics.savePost = async function savePost(postContent){
	
	const post = this;

	if(!postContent) throw new Error("Post cannot be empty");

	return post.create({ content: postContent.content }, function(err, data) {
		err ? console.log(err) : console.log(data)
	});
};

postSchema.statics.getPosts = async function getPosts(){
	return this.find();
}
  
module.exports = mongoose.model('Post', postSchema);