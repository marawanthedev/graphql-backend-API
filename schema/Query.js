const queryTypeDefs = `
  type Query {
    posts(limit:Int offset:Int): [Post]!
    post(id: String!): Post
    getCommentBy(postId:ID!,mode:String!,searchValue:String!):[Comment]
  }
`;

module.exports = queryTypeDefs;
