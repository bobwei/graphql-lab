import R from 'ramda';
import { graphql, buildSchema } from 'graphql';

import schema from './schema';
import resolver from './resolver';

/* graphql function waiting for query */
const executable = R.curryN(3, graphql)(
  buildSchema(schema),
  R.__,
  resolver,
);

export default executable;
