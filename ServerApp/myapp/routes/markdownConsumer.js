var express = require('express');
var router = express.Router();

var marked = require('marked');

router.use(function (req, res, next){
	
	req.body = marked(req.body.content.toString());
	next()
});

router.post('/', (req, res) => {res.send(req.body)});

module.exports = router;
