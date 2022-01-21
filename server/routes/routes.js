const { response } = require("express");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const User = require("../../db/models/userModel");
const Post = require("../../db/models/postModel");
const passport = require("passport");

router.route("/register").post((req, res) => {
	console.log(req.body);
	const { firstName, lastName, email, password, password2 } = req.body;

	const errors = [];

	//Check required fields
	if (!firstName || !lastName || !email || !password) {
		errors.push({
			msg: "Please fill in all fields",
		});
	}

	//Check passwords match
	if (password !== password2) {
		errors.push({
			msg: "Passwords must match",
		});
	}

	//Check pass length
	if (password.length < 6) {
		errors.push({
			msg: "Password must be at least 6 characters",
		});
	}

	//Handle error/pass response
	if (errors.length > 0) {
		res.send({ errors: errors });
	} else {
		//Validation passes

		//Find if user exists
		User.findOne({ email: email }).then(user => {
			if (user) {
				errors.push({
					msg: "E-mail already exists",
				});
				res.send({ errors: errors });
			} else {
				//User does not exist - save user
				const newUser = new User({
					firstName,
					lastName,
					email,
					password,
				});

				//Hash password
				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(newUser.password, salt, (error, hashedPass) => {
						if (err) throw err;
						//Set password to hashed
						newUser.password = hashedPass;
						//Save user
						newUser
							.save()
							.then(res.send("success"))
							.catch(err => console.log(err));
					});
				});
			}
		});
	}
});

router.route("/users").get((req, res) => {
	User.find().then(foundUsers => res.json(foundUsers));
});

//Login handle
router.route("/login").post((req, res, next) => {
	passport.authenticate("local", (err, user, info) => {
		if (err) throw err;
		if (!user) res.status(401).send("No user exists");
		else {
			req.logIn(user, err => {
				if (err) throw err;
				res.send("Successfully Authenticated");
			});
		}
	})(req, res, next);
});

router.route("/login").get((req, res) => {
	res.send(req.user);
});

//Get all posts
router.route("/posts").get((req, res) => {
	Post.find({}, (err, posts) => {
		if (err) throw err;
		res.send(posts);
	});
});

//Get single post
router.route("/posts/:id").get((req, res) => {
	const { id } = req.params;

	Post.find({ id }, (err, post) => {
		if (err) throw err;
		res.send(post);
	});
});

router.route("/posts/new").post((req, res) => {
	const { title, body, author } = req.body;
	const errors = [];

	//Make array of objects representing each paragraph
	const formattedBody = Object.values(body.blockMap);

	if (title === "") {
		errors.push({
			msg: "Title cannot be blank",
		});
	}

	if (body === "") {
		errors.push({
			msg: "Body cannot be blank",
		});
	}

	if (errors.length) {
		res.send({ errors: errors });
	} else {
		res.send("Success");
		const newPost = new Post({
			author: author,
			title: title,
			body: formattedBody,
		});

		newPost.save();
	}
});

router.route("/").get((req, res) => {
	res.send("hi");
});

module.exports = router;
