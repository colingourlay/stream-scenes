import * as Ably from 'ably';
import { ABLY_API_KEY } from '$lib/config';

/**
 * @returns {Promise<Ably.Types.RealtimeChannelPromise>}
 */
export const getChannel = async () => {
	const ably = new Ably.Realtime.Promise(ABLY_API_KEY);

	ably.connection.once('disconnected', () => {
		setTimeout(() => window.location.reload(), 1000);
	});

	await ably.connection.once('connected');

	return ably.channels.get('transcription');
};
