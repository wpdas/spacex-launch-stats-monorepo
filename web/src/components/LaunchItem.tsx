import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { LaunchesQuery_launches as Launch } from '../graphql-queries/types/LaunchesQuery';

interface LaunchItemProps {
  launch: Launch;
}

const LaunchItem: React.FC<LaunchItemProps> = ({
  launch: { missionName, launchDateLocal, launchSuccess, flightNumber },
}: LaunchItemProps) => {
  const missionClassName = launchSuccess ? 'text-success' : 'text-danger';
  const missionDate = moment(launchDateLocal).format('YYYY-MM-DD HH:mm');

  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission: <span className={missionClassName}>{missionName}</span>
          </h4>
          <p>Date: {missionDate}</p>
        </div>
        <div className="col-md-3">
          <Link
            to={`/launch/${flightNumber}`}
            className="btn btn-secondary"
            style={{ margin: 'auto', display: 'block', marginTop: 24 }}>
            Launch Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
