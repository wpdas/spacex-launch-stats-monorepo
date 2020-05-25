import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './schema';

const app = express();

// Route with graphql content
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

const PORT = process.env.SERVER_PORT || 5000;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
