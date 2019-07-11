import { Room } from "./model";

// TODO: move to some setting/env place
const baseUrl = '${window.location.protocol}//${window.location.hostname}:${window.location.port}';
const baseApi = `${baseUrl}/api`;

export const roomsUrl = `${baseApi}/rooms`;
export const generateCanEnrollRoomUrl = (room: Room) =>
  `${roomsUrl}/canenroll/${room}/user`;
