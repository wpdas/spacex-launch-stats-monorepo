import Api from './setup';
import { IServerLaunch } from './serverInterfaces';
import { ILaunch, IRocket } from './apiInterfaces';

// Get all launches
type GetAllLaunchesResponse = Array<ILaunch> | [];
export async function getAllLaunches(): Promise<GetAllLaunchesResponse> {
  const { statusText, data } = await Api.get<Array<IServerLaunch>>('/launches');
  if (statusText !== 'OK') {
    return [];
  }

  return data.map((launch) => {
    // Parse to camelCase
    const rocketData: IRocket = {
      rocketId: launch.rocket.rocket_id,
      rocketName: launch.rocket.rocket_name,
      rocketType: launch.rocket.rocket_type,
    };

    return {
      flightNumber: launch.flight_number,
      missionName: launch.mission_name,
      launchYear: launch.launch_year,
      launchDateLocal: launch.launch_date_local,
      launchSuccess: launch.launch_success,
      rocket: rocketData,
    };
  });
}

// Get one launch
type GetLaunchResponse = ILaunch | null;
export async function getLaunch(
  flightNumber: number,
): Promise<GetLaunchResponse> {
  const { statusText, data: launch } = await Api.get<IServerLaunch>(
    `/launches/${flightNumber}`,
  );
  if (statusText !== 'OK') {
    return null;
  }

  const rocketData: IRocket = {
    rocketId: launch.rocket.rocket_id,
    rocketName: launch.rocket.rocket_name,
    rocketType: launch.rocket.rocket_type,
  };

  return {
    flightNumber: launch.flight_number,
    missionName: launch.mission_name,
    launchYear: launch.launch_year,
    launchDateLocal: launch.launch_date_local,
    launchSuccess: launch.launch_success,
    rocket: rocketData,
  };
}
