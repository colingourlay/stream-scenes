/** @type {(thicknessPx: number, contentWidthPx: number, contentHeightPx: number, contentRadiusPx: number) => string} */
export const getMaskURL = (thicknessPx, contentWidthPx, contentHeightPx, contentRadiusPx) =>
	`data:image/svg+xml,${encodeURIComponent(
		`<svg xmlns="http://www.w3.org/2000/svg"><mask id="x"><rect x="${thicknessPx / 2}" y="${
			thicknessPx / 2
		}" width="${contentWidthPx + thicknessPx}" height="${contentHeightPx + thicknessPx}" rx="${
			contentRadiusPx + thicknessPx / 2
		}" stroke="#fff" stroke-width="${thicknessPx}" /></mask></svg>`
	)}#x`;
