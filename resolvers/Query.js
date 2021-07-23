const Query = {
  posts: (parent, args, { posts }) => {
    if (args.limit !== undefined && args.offset !== undefined) {
      let pagePosts = [];

      // getting to page 1 if no more next pages to display
      if (args.offset + args.limit > posts.length) {
        args.offset = 0;
      }
      // getting to last page if no more prev pages to display
      if (args.offset + args.limit <= 0) {
        args.offset = posts.length - args.limit;
      }

      for (let i = args.offset; i < args.offset + args.limit; i++) {
        pagePosts.push(posts[i]);
      }

      return pagePosts;
    }
    return posts;
  },
  post: (parent, args, { posts }) => posts.find((post) => post.id === args.id),

  getCommentBy: (parent, args, { posts }) => {
    console.log(args);
    const post = posts.find((post) => post.id === args.postId);

    return post ? getSearchResult(post, args) : null;
  },
};

function getSearchResult(post, args) {
  return post.comments.filter(
    (comment) =>
      comment[args.mode]
        .toLowerCase()
        .includes(args.searchValue.toLowerCase()) ?? comment
  );
}

module.exports = Query;
