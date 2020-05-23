/* eslint-disable camelcase */
import IServerRocket from './IServerRocket';

export default interface IServerLaunch {
  readonly flight_number: number;
  readonly mission_name: string;
  readonly launch_year: string;
  readonly launch_date_local: string;
  readonly launch_success: boolean;
  readonly rocket: IServerRocket;
}
