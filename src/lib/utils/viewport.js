/**
 * @param {number} height
 * @param {number} width
 */
export const applyViewport = (height, width) => {
	document.documentElement.style.setProperty('--viewport-height', `${height}px`);
	document.documentElement.style.setProperty('--viewport-width', `${width}px`);
};
