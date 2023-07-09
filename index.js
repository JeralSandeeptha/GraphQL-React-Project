const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./Schema/typeDefs');
const resolvers = require('./Schema/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

mongoose.connect('mongodb+srv://jeral:0529@usermanagement.kwhnond.mongodb.net/?retryWrites=true&w=majority')
    .then( () => {
        console.log('Database connection succesfull');
    })
    .catch( (error) => {
        console.log(error)
    });
server.listen(4000)
    .then( ({url})  => { 
        console.log(`Server is running at ${url}`)
    })
    .catch( (error) => {
        console.log(error)
    });