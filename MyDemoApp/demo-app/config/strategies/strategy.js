var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

module.exports = function() {
    passport.use(new LocalStrategy({
            userNameField: 'username',
            passwordField: 'password'
        },
        function(username, password, done) {
            var url = "mongodb://localhost:27017/books";
            mongodb.connect(url, function(err, db) {
                var collection = db.collection('users');
                collection.findOne({
                    'username': username
                }, function(err, result) {
                  if(result.password==password){
                    var user = result;
                    done(null, user);
                  }else{
                    done(null,false,{'message':'Bad Password'});
                  }
                });
            });
        }));
};
