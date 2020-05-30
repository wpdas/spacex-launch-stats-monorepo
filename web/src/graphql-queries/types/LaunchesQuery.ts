/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LaunchesQuery
// ====================================================

export interface LaunchesQuery_launches {
  __typename: "Launch";
  flightNumber: number;
  missionName: string;
  launchDateLocal: string;
  launchSuccess: boolean | null;
}

export interface LaunchesQuery {
  launches: LaunchesQuery_launches[];
}
