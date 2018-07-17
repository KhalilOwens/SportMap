var mongoose= require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

  // module.exports = {
//     create
//   }

//   async function create(userParam) {
//     // validate
//     if (await User.findOne({ username: userParam.username })) {
//         throw 'Username "' + userParam.username + '" is already taken';
//     }

//     const user = new User(userParam);

//     // hash password
//     if (userParam.password) {
//         user.hash = bcrypt.hashSync(userParam.password, 10);
//     }

//     // save user
//     await user.save();
// }


 const User = new Schema({
   name: {
    type: String,
    
   },
   age: {
     type: String,
   },
   location: {
     type:String
   },
   height: {
     type: String
   },
   email: {
    type: String,
  
   },
   username: {
    type: String,
    index: true
   },
   password: {
    type: String,
    bcrypt: true
  
   },
   experience: {
    type: String,
  
   },
   improvements: {
    type: String,
    
   },

})
//schema.set('toJSON', { virtuals: true });

var Usermodel = mongoose.model('User',User);

// module.exports.createUser = function (newUser, callback) {
//   bcrypt.hash(newUser.password, 10, function(err, hash){
//       if(err) throw err;
//       newUser.password = hash;
//       User.save(newUser, callback);
//   });

// };
module.exports = Usermodel;