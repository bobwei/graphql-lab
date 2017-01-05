import { graphql } from 'graphql';

import Schema from '../index';

it('can query against schema', () => {
  const query = `
    query {
      allApps(q: "Hello World") {
        id
        name
      }
    }
  `;
  graphql(Schema, query)
    .then(res => expect(res.data.allApps.length).toBe(1))
    .catch(console.log);
});

it('can query against schema without q', () => {
  const query = `
    query {
      allApps {
        id
        name
      }
    }
  `;
  graphql(Schema, query)
    .then(res => expect(res.data.allApps.length).toBe(2))
    .catch(console.log);
});
