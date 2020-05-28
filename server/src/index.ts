import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { schemas } from './graphql-structure';

const app = express();

const apolloServer = new ApolloServer({
  schema: schemas,
});

// Add graphql apollo server middleware to express app
apolloServer.applyMiddleware({ app });

const PORT = process.env.SERVER_PORT || 5000;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
