const mongoose = require("mongoose");

const userSchema = {
	firstName: String,
	lastName: String,
	email: String,
	password: String,
	date: { type: Date, default: Date.now },
};

const User = mongoose.model("User", userSchema);

module.exports = User;
