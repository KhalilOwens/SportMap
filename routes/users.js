const express = require('express');
const router = express.Router();
 const passport = require('passport');


//  module.exports = function(app, passport) {

//const LocalStrategy = require('passport-local').Strategy

var User = require('../models/userSchema');

router.post('/register', function (req, res, next) {
  
    console.log('hit the register route');
    User.create(req.body)
        .then((dbUser) => {
            console.log(dbUser);
            res.json(dbUser)
        })
        .catch(err => {
            console.log(err);
            res.send(err)
        });

});

router.post('/register2/:id', function (req, res, next) {
  
    console.log('hit register 2');
    User.findOneAndUpdate({_id: req.params.id}, req.body)
        .then((dbUser) => {
            console.log(dbUser);
            res.json(dbUser)
        })
        .catch(err => {
            console.log(err);
            res.send(err)
        });

});


//     app.post('/login',
// passport.authenticate('local'),
//     function(req, res) {

//     });

 //}
 function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

module.exports = router;