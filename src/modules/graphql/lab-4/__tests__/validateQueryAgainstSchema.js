import { graphql } from 'graphql';

import Schema from '../index';

it('can query with schema', () => {
  const query = `
    query {
      allApps(q: "Hello World") {
        id
        name
      }
    }
  `;
  graphql(Schema, query)
    .then(res => expect(res.data.allApps.length).toBe(2));
});
