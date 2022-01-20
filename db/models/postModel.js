const mongoose = require("mongoose");

const postSchema = {
	title: String,
	author: String,
	body: String,
	date: { type: Date, default: Date.now },
};

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
