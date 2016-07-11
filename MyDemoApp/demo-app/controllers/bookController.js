//reviewing ci
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var bookController = function(bookService, category) {

    var getByIndex = function(req, res) {
        var url = "mongodb://localhost:27017/books";
        mongodb.connect(url, function(err, db) {
            if (err) throw err;
            var collection = db.collection('book');
            collection.find({}).toArray(function(err, result) {
                res.render("bookListView.ejs", {
                    title: 'Hello from Render',
                    category: category,
                    books: result

                });
                db.close();
            });
        });
    };
    var getById = function(req, res) {
        var id = new objectId(req.params.id);
        var url = "mongodb://localhost:27017/books";
        mongodb.connect(url, function(err, db) {
            if (err) throw err;
            var collection = db.collection('book');
            collection.findOne({
                "_id": id
            }, function(err, result) {
                res.render("bookView.ejs", {
                    title: 'Hello from Render',
                    category: category,
                    books: result

                });
                db.close();
            });
        });
    };

    var middleware=function(req, res, next) {
        if (!req.user) {
          //  res.redirect('/');
        }
        next();
    };
    return {
        getIndex: getByIndex,
        getById: getById,
        middleware:middleware
    };
};
module.exports = bookController
