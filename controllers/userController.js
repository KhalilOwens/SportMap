const db = require("../models");

// Defining methods for the usersController
module.exports = {

  create: function(req, res) {
    db.User
      .create(req.body)
      .then(User => res.json(User))
      .catch(err => res.status(422).json(err));
  },
  };
