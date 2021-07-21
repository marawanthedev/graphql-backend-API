const queryTypeDefs = `
  type Query {
    posts: [Post!]!
    post(id: String!): Post
    getCommentByAuthor(postId:ID! author: String!): Comment
    getCommentByBody(postId:ID! body: String!): Comment
    getCommentByEmail(postId:ID! email: String!): Comment
  }
`;

module.exports = queryTypeDefs;
