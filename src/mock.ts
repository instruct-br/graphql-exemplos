import express from "express";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { addMocksToSchema } from "@graphql-tools/mock";
import { typeDefs } from "./schema"

const schema = makeExecutableSchema({ typeDefs });
const schemaWithMocks = addMocksToSchema({ schema });

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schemaWithMocks,
    graphiql: true,
  }),
);

app.listen(4001, () => {
  console.info("Mock server listening on http://localhost:4001/graphql");
});
