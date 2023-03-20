import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from "./schema"
import { Resolvers, Status } from "./__generated__/resolver-types"

const resolvers : Resolvers = {
  Query: {
    myClusters: () => {
      return [
        {
          name: "Cluster1",
          kubernetesVersion: "1.26.0",
          status: Status.Unhealthy,
          owner: {
            id: "1",
            name: "Cliente1",
            clusters: [],
            isActive: true
          }
        }
      ]
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const run = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at: ${url}`);
}

run()
