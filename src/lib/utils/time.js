/**
 * @param {number} value
 * @returns {string}
 */
export const padZero = (value) => String(value).padStart(2, '0');

/**
 * @param {number} [ms]
 * @param {boolean} [shouldRoundUp]
 * @returns {string}
 */
export const hoursMinutesSeconds = (ms = 0, shouldRoundUp = false) => {
	const s = Math[ms !== 0 && shouldRoundUp ? 'ceil' : 'floor'](ms / 1000);
	const hours = Math.floor(s / 3600);
	const minutes = Math.floor((s - hours * 3600) / 60);
	const seconds = s - hours * 3600 - minutes * 60;

	return `${hours}:${padZero(minutes)}:${padZero(seconds)}`.replace(/^0:/, '');
};
