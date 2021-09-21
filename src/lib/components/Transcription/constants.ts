import { PIESOCKET_API_KEY } from '$lib/config';

export const ROOM_ID = 'stream-scenes-transcription';
export const SOCKET_URL = `wss://free3.piesocket.com/v3/${ROOM_ID}?api_key=${PIESOCKET_API_KEY}`;
export const JOIN_MESSAGE = JSON.stringify({ join: ROOM_ID });

export const createWebSocket = (): WebSocket => {
	const socket = new WebSocket(SOCKET_URL);

	socket.onclose = () => setTimeout(window.location.reload, 100);
	socket.onopen = () => socket.send(JOIN_MESSAGE);

	return socket;
};
