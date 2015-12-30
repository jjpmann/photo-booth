var express = require('express');
var hipchat = require('../lib/hipchat');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
    res.render('json', {layout: false });
});

router.get("/image/:name", function(req, res) {

    var name = 'uploads/'+req.params.name;
    console.log( name );

    fs.readFile(name, function (err, data) {
        if (err) throw err;
        var img = new Buffer(data, 'base64');

        res.writeHead(200, {
            'Content-Type': 'image/jpg',
            'Content-Length': img.length
        });
        res.end(img); 
    });



});


/* POST TEST */
router.post('/save', function(req, res, next) {
    
    var msg = req.body.message + ' ('+req.body.Filename+')';

    console.log( req.body );
    var link = 'http://lmodev.com:8888/api/' + req.files[0].path;

    msg += "\n";
    msg += link;

    hipchat.success(msg);

    if (false) {
        res.render('xmlError', { layout: false, message: "Something broke!"});
    } else {
        res.render('xmlSuccess', { layout: false });
    }

});


module.exports = router;
