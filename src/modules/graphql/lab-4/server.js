import express from 'express';
import dotenv from 'dotenv';
import graphqlHTTP from 'express-graphql';

import schema from './index';

dotenv.config({ silent: true });

const { PORT, ENABLE_GRAPHIQL } = process.env;

/* server configs */
const app = express();

app.set('port', (PORT || 4000));

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: ENABLE_GRAPHIQL === 'true',
}));

/* start server */
app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
