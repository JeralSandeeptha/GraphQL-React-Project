const { gql } = require('apollo-server');

const typeDefs = gql`
    type Post {
        id: ID!
        title: String!
        description: String!
        image: String!
    }    
    
    input CreatePostInput {
        title: String
        description: String
        image: String
    }
    
    input UpdatePostInput {
        id: ID!
        title: String!
        description: String!
        image: String!
    }
 
    type Query{
        getPosts: [Post]!
        getPost(id: ID!): Post!
    }
     
    type Mutation {
        createPost(input: CreatePostInput!): Post!
        updatePost(input: UpdatePostInput!): Post!
        deletePost(id: ID!): String!
    }
`;

module.exports = typeDefs;


