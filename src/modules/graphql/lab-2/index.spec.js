import { graphql } from 'graphql';

import executableSchema from './index';

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
  graphql(executableSchema, query)
    .then(res => expect(res).toEqual(expectedRes));
});
