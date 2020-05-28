import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { schemas } from 'graphql-structure';
import setupCors from 'config/setupCors';

const app = express();
setupCors(app);

const apolloServer = new ApolloServer({
  schema: schemas,
});

// Add graphql apollo server middleware to express app
apolloServer.applyMiddleware({ app });

app.get('/', (_, res) => {
  res.send('Server is alive');
});

const PORT = process.env.SERVER_PORT || 5000;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
