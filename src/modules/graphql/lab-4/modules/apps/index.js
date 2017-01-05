import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
} from 'graphql';

const AppType = new GraphQLObjectType({
  name: 'AppType',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  },
});

const GraphQLFieldConfigMap = {
  allApps: {
    type: new GraphQLList(AppType),
    args: {
      q: { type: GraphQLString },
    },
    resolve() {
      return [
        { id: 1, name: 'ABC' },
        { id: 2, name: 'Hello World' },
      ];
    },
  },
};

export default GraphQLFieldConfigMap;
