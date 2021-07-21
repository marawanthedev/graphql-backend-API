const PostResolver = {
  post: (parent, args, { posts }) => posts.find((post) => post.id === args.id),
};

module.exports = PostResolver;
