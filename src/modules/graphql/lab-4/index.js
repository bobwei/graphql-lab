import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

import appsGraphQLFieldConfigMap from './modules/apps';

const QueryRootType = new GraphQLObjectType({
  name: 'QueryRootType',
  fields: {
    ...appsGraphQLFieldConfigMap,
  },
});

const Schema = new GraphQLSchema({
  query: QueryRootType,
});

export default Schema;
