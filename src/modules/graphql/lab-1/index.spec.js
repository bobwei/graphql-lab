import R from 'ramda';
import { graphql, buildSchema } from 'graphql';

import executable from './index';
import resolver from './resolver';
import schema from './schema';

it('can execute query', () => {
  const query = `
    query {
      echo
    }
  `;
  const expectedRes = {
    data: {
      echo: 'Hello World',
    },
  };
  executable(query)
    .then(res => expect(res).toEqual(expectedRes));
});
