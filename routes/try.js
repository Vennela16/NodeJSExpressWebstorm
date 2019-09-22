var express = require('express');
var router = express.Router();

/* GET try page. */
router.get('/', function(req, res, next) {
    res.render('try', { title: 'Express' });
});

module.exports = router;
