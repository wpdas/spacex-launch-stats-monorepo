import Api from './setup';
import { IServerRocket } from './serverInterfaces';
import { IRocket } from './apiInterfaces';

// Get all rockets
type GetAllRocketsResponse = Array<IRocket> | [];
export async function getAllRockets(): Promise<GetAllRocketsResponse> {
  const { statusText, data } = await Api.get<Array<IServerRocket>>('/rockets');
  if (statusText !== 'OK') {
    return [];
  }

  return data.map((rocket) => {
    // Parse to camelCase
    return {
      rocketId: rocket.rocket_id,
      rocketName: rocket.rocket_name,
      rocketType: rocket.rocket_type,
    };
  });
}

// Get one rocket
type GetOneRocketResponse = IRocket | null;
export async function getOneRocket(
  rockedId: string,
): Promise<GetOneRocketResponse> {
  const { statusText, data: rocket } = await Api.get<IServerRocket>(
    `/rockets/${rockedId}`,
  );

  if (statusText !== 'OK') {
    return null;
  }

  return {
    rocketId: rocket.rocket_id,
    rocketName: rocket.rocket_name,
    rocketType: rocket.rocket_type,
  };
}
