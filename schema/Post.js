const PostTypeDef = `
  type Post {
    id: ID!
    title: String!
    text: String!
    author: String!
    authorEmail: String!
    comments: [Comment]
  }
`;

module.exports = PostTypeDef;
