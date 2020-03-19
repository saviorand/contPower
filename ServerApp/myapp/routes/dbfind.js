const router = require('express').Router({ mergeParams: true });

const myModels = require('mongoose').models;

router.post('/', async (req, res, next) => {
	const allPosts = await myModels.Post.getPosts();
	return res.send(allPosts);
});

module.exports = router;