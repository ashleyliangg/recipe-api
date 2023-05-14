import { Router } from 'express';
import * as Posts from './controllers/post_controller';


const router = Router();

const handleCreate = async (req, res) => {
	try {
		// use req.body etc to await some controller function
		const postInit = req.body;
		const result = await Posts.createPost(postInit);
		// send back the result
		res.json(result);
		// res.json({'hi': 'created'});
	} catch (error) {
		// or catch the error and send back an error
		res.status(500).json({ error });
	}
}

const handleGetPosts = async (req, res) => {
	try {
		// use req.body etc to await some controller function
		const result = await Posts.getPosts();
		// send back the result
		res.json(result);
		// res.json({'hi': 'got posts'});
	} catch (error) {
		// or catch the error and send back an error
		res.status(501).json({ error });
	}
}

const handleGetPost = async (req, res) => {
	try {
		const id = req.params.id;
		const result = await Posts.getPost(id);
		res.json(result);
		// res.json({'hi': 'got 1'});
	} catch (error) {
		res.status(502).json({ error });
	}
}

const handleUpdate = async (req, res) => {
	try {
		const id = req.params.id;
		const postFields = req.body;
		const result = await Posts.updatePost(id, postFields);
		res.json(result);
		// res.json({'hi': 'updated'});
	} catch (error) {
		res.status(503).json({ error });
	}
}

const handleDelete = async (req, res) => {
	try {
		const id = req.params.id;
		const result = await Posts.deletePost(id);
		// send back the result
		res.json(result);
		// res.json({'hi': 'deleted'});
	} catch (error) {
		// or catch the error and send back an error
		res.status(504).json({ error });
	}
}

router.get('/', (req, res) => {
  res.json({ message: 'welcome to our blog api!' });
});

///your routes will go here
router.route('/posts')
	.post(handleCreate)
	.get(handleGetPosts)

router.route('/posts/:id')
  .put(handleUpdate)
  .get(handleGetPost)
  .delete(handleDelete);

export default router;