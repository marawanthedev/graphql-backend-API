const commentTypeDefs = `
  type Comment {
    id: ID!
    author: String!
    authorEmail: String!
    body: String!
  }
`;

module.exports = commentTypeDefs;
