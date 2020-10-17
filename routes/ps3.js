const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/ps3', function(req, res, next) {
    res.render('ps3', {title: "PS3", "name":"Spencer" });

});

router.post('/ps3',
    function (req, res, next) {
        res.render(`ps3`, {title: "PS3", "name":"Spencer" });

});

module.exports = router;
