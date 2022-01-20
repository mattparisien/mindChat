const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");
const flash = require("connect-flash");


const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

//Express session
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}))


app.use(flash());
app.use((req, res, next) => {
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error_msg = req.flash('error');
	next();
})

app.use("/", require("./routes/routes"));

//Passport config
require("./config/passport")(passport);

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());
//connect to mongoose
mongoose.connect(
	"mongodb+srv://mattparisien:chewing389@cluster0.ehgde.mongodb.net/mindChatDb"
);

//require routes

app.listen(PORT, () => {
	console.log(`Express server is running on port ${PORT}`);
});
