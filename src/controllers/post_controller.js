import Post from '../models/post_model';

export async function createPost(postFields, apiKey) {

	const post = new Post();
	post.title = postFields.title;
	const tags = postFields.tags;
	post.tags = tags.split(" ");
	post.coverUrl = postFields.coverUrl;
	post.content = postFields.content;
	post.key = apiKey;
	try {
		//await creating a post
		const savedPost = await post.save();
		//return post
		return savedPost;
	} catch (error) {
		throw new Error(`create post error: ${error}`);
	}
};
export async function getPosts(apiKey) {
	try {
		//await finding posts
		const allPosts = await Post.find({ key: apiKey }, 'title tags coverUrl').sort({createdAt: 'desc'}); 
		//return post
		return allPosts;
	} catch (error) {
		throw new Error(`get all posts error: ${error}`);
	}
};
export async function getPost(id) {
	try {
		//await finding one post
		//return post
		const post = await Post.findById(id).exec();
		// according to https://stackoverflow.com/questions/31549857/mongoose-what-does-the-exec-function-do, gets better stack trace when using exec() if error happens
		if (post) {
			return post;
		} else {
			throw new Error(`get post error: ${error}`);
		}
	} catch (error) {
		throw new Error(`get post error: ${error}`);
	}  
};

export async function deletePost(id) {
	//returns true if deletes correctly, false otherwise
	try {
		//await deleting a post
  //return confirmation
		const delPost = await Post.findByIdAndDelete(id)
		if (delPost) {
			return true;
		} else {
			return false;
		}
	} catch (error) {
		throw new Error(`delete post error: ${error}`);
	}
};
export async function updatePost(id, postFields) {
  //await updating a post by id
  //return *updated* post
	try {
		// const updatedPost = await Post.findByIdAndUpdate(id, postFields);
		const post = await Post.findById(id);
		post.title = postFields.title;
		const tags = postFields.tags;
		post.tags = tags.split(" ");
		post.coverUrl = postFields.coverUrl;
		post.content = postFields.content;
		const updatedPost = post.save();
		return updatedPost;
	} catch (error) {
		throw new Error(`update post error: ${error}`);
	}
};
