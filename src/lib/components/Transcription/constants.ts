import { WEBSOCKET_SERVER_URL } from '$lib/config';

export const createWebSocket = (): WebSocket => {
	const socket = new WebSocket(WEBSOCKET_SERVER_URL);

	socket.onclose = (event) =>
		event.code !== 1006 && setTimeout(() => window.location.reload(), 100);
	socket.onerror = (event) => console.error(event);

	return socket;
};
