var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* POST TEST */
router.post('/', function(req, res, next) {
    
    //console.log( req.files );
    //res.set('Content-Type', 'text/xml');
    if (false) {
        res.render('xmlError', { layout: false, message: "Something broke!"});
    } else {
        res.render('xmlSuccess', { layout: false });
    }
    
});


module.exports = router;
