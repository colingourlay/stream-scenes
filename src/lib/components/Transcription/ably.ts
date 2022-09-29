import * as Ably from 'ably';
import { ABLY_API_KEY } from '$lib/config';

export const getChannel = async (): Promise<Ably.Types.RealtimeChannelPromise> => {
	const ably = new Ably.Realtime.Promise(ABLY_API_KEY);

	ably.connection.once('disconnected', () => {
		setTimeout(() => window.location.reload(), 1000);
	});

	await ably.connection.once('connected');

	return ably.channels.get('transcription');
};
