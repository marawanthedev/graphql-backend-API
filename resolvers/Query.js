const Query = {
  posts: (parent, args, { posts }) => posts,
  post: (parent, args, { posts }) => posts.find((post) => post.id === args.id),
  getCommentByAuthor: (parent, args, { posts }) => {
    const post = posts.find((post) => post.id === args.postId);
    return post
      ? post.comments.find((comment) => comment.author === args.author)
      : null;
  },
  getCommentByEmail: (parent, args, { posts }) => {
    const post = posts.find((post) => post.id === args.postId);
    return post
      ? post.comments.find((comment) => comment.email === args.email)
      : null;
  },
  getCommentByBody: (parent, args, { posts }) => {
    const post = posts.find((post) => post.id === args.postId);
    return post
      ? post.comments.find((comment) =>
          comment.body.toLowerCase().includes(args.body.toLowerCase())
        )
      : null;
  },
};

module.exports = Query;
