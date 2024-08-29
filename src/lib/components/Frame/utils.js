/** @type {(thicknessPx: number, frameWidthPx: number, frameHeightPx: number, contentWidthPx: number, contentHeightPx: number, contentRadiusPx: number) => string} */
export const getMaskURL = (
	thicknessPx,
	frameWidthPx,
	frameHeightPx,
	contentWidthPx,
	contentHeightPx,
	contentRadiusPx
) =>
	`data:image/svg+xml,${encodeURIComponent(
		`<svg xmlns="http://www.w3.org/2000/svg"><mask id="x"><rect x="0" y="0" width="${frameWidthPx}" height="${frameHeightPx}" fill="#fff" /><rect x="${thicknessPx}" y="${thicknessPx}" width="${contentWidthPx}" height="${contentHeightPx}" rx="${contentRadiusPx}" /></mask></svg>`
	)}#x`;
