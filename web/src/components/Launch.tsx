import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link, RouteComponentProps } from 'react-router-dom';

import { LAUNCH_QUERY } from '../graphql-queries';
import {
  LaunchQuery,
  LaunchQueryVariables,
} from '../graphql-queries/types/LaunchQuery';

type LaunchProps = RouteComponentProps<{ flightNumber: string }>;

const Launch: React.FC<LaunchProps> = ({ match: { params } }: LaunchProps) => {
  const parsedFlightNumber = parseInt(params.flightNumber, 10);
  const { loading, error, data } = useQuery<LaunchQuery, LaunchQueryVariables>(
    LAUNCH_QUERY,
    { variables: { flightNumber: parsedFlightNumber } },
  );

  let launch = null;
  if (!loading && !error && data && data.launch) {
    const {
      missionName,
      flightNumber,
      launchYear,
      launchSuccess,
      rocket: { rocketId, rocketName, rocketType },
    } = data.launch;

    const launchSuccessClass = launchSuccess ? 'text-success' : 'text-danger';
    launch = (
      <div>
        <h1 className="display-3 my-3">
          <span className="text-dark">Mission:</span> {missionName}
        </h1>
        <h4 className="mb-3">Launch Details</h4>
        <ul className="list-group">
          <li className="list-group-item">Flight Number: {flightNumber}</li>
          <li className="list-group-item">Launch Year: {launchYear}</li>
          <li className="list-group-item">
            Launch Successful:{' '}
            <span className={launchSuccessClass}>
              {launchSuccess ? 'Yes' : 'No'}
            </span>
          </li>
        </ul>

        <h4 className="my-3">Rocket Details</h4>
        <ul className="list-group">
          <li className="list-group-item">Rocket ID: {rocketId}</li>
          <li className="list-group-item">Rocket Name: {rocketName}</li>
          <li className="list-group-item">Rocket ID: {rocketType}</li>
        </ul>
        <hr />
        <Link to="/" className="btn btn-secondary">
          Back
        </Link>
      </div>
    );
  } else {
    launch = <h4>Loading...</h4>;
  }

  return (
    <>
      <h1>Launch</h1>
      {launch}
    </>
  );
};

export default Launch;
