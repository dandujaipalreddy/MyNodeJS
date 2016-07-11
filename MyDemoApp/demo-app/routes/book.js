var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;


var router = function(category) {

    var bookController = require('../controllers/bookController')(null, category);
    bookRouter.use(bookController.middleware);
    bookRouter.route('/').get(bookController.getIndex);
    bookRouter.route('/:id').get(bookController.getById);

    return bookRouter;
};

module.exports = router;