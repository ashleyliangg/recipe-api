import { Router } from 'express';
import * as Posts from './controllers/post_controller';


const router = Router();

const handleCreate = async (req, res) => {
	try {
		// use req.body etc to await some controller function
		const apiKey = req.query.key;
		const postInit = req.body;
		const result = await Posts.createPost(postInit, apiKey);
		// send back the result
		res.json(result);
	} catch (error) {
		// or catch the error and send back an error
		res.status(404).json({ error });
	}
}

const handleGetPosts = async (req, res) => {
	try {
		// use req.body etc to await some controller function
		const apiKey = req.query.key;
		const result = await Posts.getPosts(apiKey);
		// send back the result
		res.json(result);
	} catch (error) {
		// or catch the error and send back an error
		res.status(404).json({ error });
	}
}

const handleGetPost = async (req, res) => {
	try {
		const id = req.params.id;
		const result = await Posts.getPost(id);
		res.json(result);
	} catch (error) {
		res.status(404).json({ error });
	}
}

const handleUpdate = async (req, res) => {
	try {
		const id = req.params.id;
		const postFields = req.body;
		const result = await Posts.updatePost(id, postFields);
		res.json(result);
	} catch (error) {
		res.status(404).json({ error });
	}
}

const handleDelete = async (req, res) => {
	try {
		const id = req.params.id;
		const result = await Posts.deletePost(id);
		// send back the result
		res.json(result);
	} catch (error) {
		// or catch the error and send back an error
		res.status(404).json({ error });
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
