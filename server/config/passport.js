const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//Load User Model

const User = require("../../db/models/userModel");

module.exports = function (passport) {
	passport.use(
		new LocalStrategy(
			{
				usernameField: "email",
			},
			(email, password, done) => {
				//Match user
				User.findOne({ email: email })
					.then(user => {
						if (!user) {
							return done(null, false, { message: "Email is not registered" });
						}

						//Match password
						bcrypt.compare(password, user.password, (err, isMatch) => {
							if (err) throw err;
							if (isMatch) {
								return done(null, user);
							} else {
								return done(null, false, { message: "Incorrect password" });
							}
						});
					})
					.catch(err => console.log('ok', err));
			}
		)
	);

	passport.serializeUser((user, done) => {
		done(null, user.id);
	});

	passport.deserializeUser((id, done) => {
		User.findById(id, (err, user) => {
      console.log('hi babe')
			done(err, user);
		});
	});
};
