let posts = [];

exports.getPosts = (req, res) => {
  res.json(posts);
};

exports.createPost = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  const post = {
    id: Date.now(),
    title,
    content,
    author: req.user.email,
    createdAt: new Date().toISOString()
  };

  posts.push(post);
  res.status(201).json(post);
};

exports.updatePost = (req, res) => {
  const post = posts.find(p => p.id == req.params.id);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  post.title = req.body.title || post.title;
  post.content = req.body.content || post.content;

  res.json(post);
};

exports.deletePost = (req, res) => {
  posts = posts.filter(p => p.id != req.params.id);
  res.json({ message: "Post deleted successfully" });
};
