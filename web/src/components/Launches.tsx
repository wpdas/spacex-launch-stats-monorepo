import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { LAUNCHES_QUERY } from '../graphql-queries';
import { LaunchesQuery } from '../graphql-queries/types/LaunchesQuery';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const Launches: React.FC = () => {
  const { loading, error, data } = useQuery<LaunchesQuery>(LAUNCHES_QUERY);

  let launchers = null;
  if (!loading && !error) {
    launchers = data?.launches.map((launch) => (
      <LaunchItem key={launch.flightNumber} launch={launch} />
    ));
  } else {
    launchers = <h4>Loading...</h4>;
  }

  return (
    <>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      {launchers}
    </>
  );
};

export default Launches;
