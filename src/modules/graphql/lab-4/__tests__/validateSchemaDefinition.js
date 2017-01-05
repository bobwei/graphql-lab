import fs from 'fs';
import path from 'path';
import R from 'ramda';
import { buildSchema, printSchema } from 'graphql';

it('can buildSchema without error', () => {
  const schema = R.compose(
    buildSchema,
    R.apply(fs.readFileSync),
    R.append({ encoding: 'utf8' }),
    R.of,
    R.curryN(2, path.join)(__dirname),
  )('../schema.gql');
  console.log(printSchema(schema));
});
