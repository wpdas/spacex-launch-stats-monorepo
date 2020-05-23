import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
} from 'graphql';

import { getAllLaunches, getLaunch } from 'api/launches';
import { getAllRockets, getOneRocket } from 'api/rockets';

// Rocket Type
const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    rocketId: { type: GraphQLString },
    rocketName: { type: GraphQLString },
    rocketType: { type: GraphQLString },
  }),
});

// Launch Type
const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    flightNumber: { type: GraphQLInt },
    missionName: { type: GraphQLString },
    launchYear: { type: GraphQLString },
    launchDateLocal: { type: GraphQLString },
    launchSuccess: { type: GraphQLBoolean },
    rocket: { type: RocketType },
  }),
});

// Root Query - The endpoints that have resolvers tha will resolve our data
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    launches: {
      type: new GraphQLList(LaunchType),
      resolve() {
        // The place were we get our data
        return getAllLaunches().then((launchesData) => launchesData);
      },
    },
    launch: {
      type: LaunchType,
      args: {
        flightNumber: { type: GraphQLInt },
      },
      resolve(_, args) {
        const { flightNumber } = args;
        return getLaunch(flightNumber).then((launchData) => launchData);
      },
    },
    rockets: {
      type: new GraphQLList(RocketType),
      resolve() {
        return getAllRockets().then((rocketsData) => rocketsData);
      },
    },
    rocket: {
      type: RocketType,
      args: {
        rockedId: { type: GraphQLString },
      },
      resolve(_, args) {
        const { rockedId } = args;
        return getOneRocket(rockedId).then((rocketData) => rocketData);
      },
    },
  }),
});

export default new GraphQLSchema({
  query: RootQuery,
});
