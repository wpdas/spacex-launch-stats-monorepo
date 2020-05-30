/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LaunchQuery
// ====================================================

export interface LaunchQuery_launch_rocket {
  __typename: "Rocket";
  /**
   * Description for field
   * Supports **multi-line** description for your [API](http: // example.com)!
   */
  rocketId: string;
  rocketName: string;
  rocketType: string;
}

export interface LaunchQuery_launch {
  __typename: "Launch";
  flightNumber: number;
  missionName: string;
  launchYear: string;
  launchDateLocal: string;
  launchSuccess: boolean | null;
  rocket: LaunchQuery_launch_rocket;
}

export interface LaunchQuery {
  launch: LaunchQuery_launch | null;
}

export interface LaunchQueryVariables {
  flightNumber: number;
}
