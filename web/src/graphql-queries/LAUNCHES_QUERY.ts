import { gql } from 'apollo-boost';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flightNumber
      missionName
      launchDateLocal
      launchSuccess
    }
  }
`;

export default LAUNCHES_QUERY;
