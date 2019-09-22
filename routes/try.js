var express = require('express');
var router = express.Router();

module.exports = router;

router.get('/', function (request, response) {

    mongodb.MongoClient.connect(process.env.MONGODB_URI, function(err, db) {
        if(err) throw err;
        //get collection of routes
        var Routes = db.collection('Routes');
        //get all Routes with frequency >=1
        Routes.find({ frequency : { $gte: 0 } }).sort({ name: 1 }).toArray(function (err, docs) {
            if(err) throw err;

            response.render('try', {results: docs});

        });

        //close connection when your app is terminating.
        db.close(function (err) {
            if(err) throw err;
        });
    });//end of connect
});//end app.get
