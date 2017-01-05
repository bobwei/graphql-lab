import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
} from 'graphql';
import R from 'ramda';

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
    resolve(_, { q }) {
      const data = [
        { id: 1, name: 'ABC' },
        { id: 2, name: 'Hello World' },
      ];
      return R.filter(
        R.anyPass([
          R.propEq('id', q),
          R.propEq('name', q),
          R.always(R.isNil(q)),
        ]),
      )(data);
    },
  },
};

export default GraphQLFieldConfigMap;
