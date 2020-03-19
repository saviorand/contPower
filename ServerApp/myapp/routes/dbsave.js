const router = require('express').Router({ mergeParams: true });

const myModels = require('mongoose').models;

router.post('/', async (req, res, next) => {
	const postContent = req.body;
	const savedPost = await myModels.Post.savePost(postContent);
	return res.send();
});

module.exports = router;