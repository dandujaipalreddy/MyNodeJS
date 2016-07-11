var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId=require('mongodb').ObjectID;
var books = [{
    'title': 'JavaScript the Good parts',
    'author': 'cockford',
    'read': false,
    'possess': true
}, {
    'title': 'Alchemist',
    'author': 'paulo coelho',
    'read': true,
    'possess': true
}, {
    'title': 'The art of problem solving',
    'author': 'Donald Knuth',
    'read': false,
    'possess': false
}, {
    'title': 'Java the Good parts',
    'author': 'cockford',
    'read': false,
    'possess': true
}];
var router = function() {
    adminRouter.route('/addBooks')
        .get(function(req, res) {
            var url = "mongodb://localhost:27017/books";
            mongodb.connect(url, function(err, db) {
                if (err) throw err;
                var collection=db.collection('book');
                collection.insertMany(books,function(err,result){
                  res.send(result);
                  db.close();
                });
            });
        });
    return adminRouter;
};
module.exports = router;
