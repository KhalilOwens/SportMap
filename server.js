const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const exphbs = require("express-handlebars");
const expressValidator = require("express-validator");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongo = require("mongodb");
const mongoose = require("mongoose");
const morgan = require("morgan");

//const db = mongoose.connection; 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/SportsMaps");

const routes = require("./routes/index")//(app,passport);
const User = require("./routes/users")//(app,passport)

const app = express();
const PORT = process.env.PORT || 3001;



// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(cookieParser());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use('/', routes);
app.use('/users', User)

var sess = {
  secret: 'secret',

  cookie: {}
}
//app.set('view engine', '');

// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// app.use(flash()); // use connect-flash for flash messages stored in session





 
if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}
 
app.use(session(sess));

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) { return done(null, false); }
//       if (!user.verifyPassword(password)) { return done(null, false); }
//       return done(null, user);
//     });
//   }
// ));

app.use(flash());

app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg'); 
  res.locals.error = req.flash('error');
  next();

});

app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
    const namespace = param.split(".") ,
    root = namespace.shift(),
    formParam = root;

    while (namespace.length) {

      formParam += '['+ namespace.shift() + ']';
    }
    return{
      param : formParam,
      msg : msg,
      value : value 
    }
  }
}));



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
