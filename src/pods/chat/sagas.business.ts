import { createSocket, SocketDescriptor } from './api';

export const establishRoomSocketConnection = (nickname: string, room: string) => {
  // TODO: move this to env variable
  const baseUrl = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;

  const socketParams: SocketDescriptor = {
    url: baseUrl,
    channel: room,
    options: {
      query: `user=${nickname}`
    },
  };

  return createSocket(socketParams);        
};
