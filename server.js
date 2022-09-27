const { ApolloServer } = require('apollo-server');

const { sequelize } = require('./models')
// The GraphQL schema
const typeDefs = require("./graphQl/typeDefs")

// A map of functions which return data for the schema.
const resolvers = require("./graphQl/resolvers")


const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);

    sequelize.authenticate()
        .then(() => console.log("Database Connected!"))
        .catch((err) => console.log(err))


});