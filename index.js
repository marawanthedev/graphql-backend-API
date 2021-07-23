const { ApolloServer } = require("apollo-server");
const { posts, comments } = require("./db/db");
const Query = require("./resolvers/Query");
const PostTypeDef = require("./schema/Post");
const CommentTypeDef = require("./schema/Comment");
const queryTypeDef = require("./schema/Query");

console.log(Query);

const server = new ApolloServer({
  typeDefs: [CommentTypeDef, PostTypeDef, queryTypeDef],
  resolvers: {
    Query,
  },
  context: {
    posts,
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
