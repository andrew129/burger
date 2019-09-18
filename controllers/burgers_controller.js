let express = require('express')

let burgers = require('../models/burger.js')

var router = express.Router();

router.get('/', function(req, res) {
    burgers.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject)
        res.render('index', hbsObject)
    })
})

router.post('/api/burgers', function(req, res) {
    console.log(req.body.burger_name)
    burgers.create([
        'burger_name'
    ], [
        req.body.burger_name
    ], function(result) {
        res.json({ id: result.insertId })
    })
})

router.put('/api/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    console.log('condition', condition);

    burgers.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
