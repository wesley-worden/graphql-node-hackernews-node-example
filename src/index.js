const { GraphQLServer } = require('graphql-yoga');

//define schema
const typeDefs = `
type Query {
    info: String!
}
`

//define resolvers
const resolvers = {
    Query: {
        info: function() {
            return 'This is the API of a Hackernews Clone bruh';
        }
    }
}

//create server
const server = new GraphQLServer({ typeDefs, resolvers });
server.start(function() {
    console.log('Server is running on http://localhost:4000');
})