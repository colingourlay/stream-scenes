export const padZero = (value: number): string => String(value).padStart(2, '0');

export const hoursMinutesSeconds = (ms = 0, shouldRoundUp = false): string => {
	const s: number = Math[ms !== 0 && shouldRoundUp ? 'ceil' : 'floor'](ms / 1000);
	const hours: number = Math.floor(s / 3600);
	const minutes: number = Math.floor((s - hours * 3600) / 60);
	const seconds: number = s - hours * 3600 - minutes * 60;

	return `${hours}:${padZero(minutes)}:${padZero(seconds)}`.replace(/^0:/, '');
};
