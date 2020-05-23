import IRocket from './IRocket';

export default interface ILaunch {
  readonly flightNumber: number;
  readonly missionName: string;
  readonly launchYear: string;
  readonly launchDateLocal: string;
  readonly launchSuccess: boolean;
  readonly rocket: IRocket;
}
