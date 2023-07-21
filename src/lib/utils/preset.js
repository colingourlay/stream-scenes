export const PRESETS = /** @type {const} */ ([
	'abc',
	'canva',
	'monochrome',
	'playdate',
	'rebecca',
	'synthwave'
]);

/**
 * @typedef {typeof PRESETS[number]} Preset
 */

/**
 * @param {string} key
 * @returns {value is Preset}
 */
const isPreset = (key) => {
	return PRESETS.includes(/** @type Preset */ (key));
};

/** @type {Record<string, string>} */
export const PRESETS_IMAGES = /** @type {const} */ ({
	// canva: `linear-gradient(120deg, #00c4cc 11%, #72be44 23%, #fd0 37%, #fbbf0a 40%, #f79d16 46%, #f5891d 50%, #f48120 53%, #ee402f 66%, #ed3e75 80%, #df3c83 81%, #bc35a7 84%, #a030c4 88%, #8d2dd8 91%, #812be4 94%, #7d2ae8 98%)`,
	canva: `linear-gradient(120deg, var(--color-primary), var(--color-primary) 30%, #6420ff 50%, var(--color-secondary) 80%)`
});

/** @type {Record<Preset, import('./theme').Theme>} */
export const PRESETS_THEMES = /** @type {const} */ ({
	abc: {
		'color-primary': '#fdc605',
		'color-secondary': '#fdc605'
	},
	canva: {
		'hue-primary': '182.35',
		'hue-secondary': '264.12',
		'saturation-primary': '100%',
		'saturation-secondary': '100%',
		'lightness-primary': '40%',
		'lightness-secondary': '61.96%'
	},
	monochrome: {
		'saturation-primary': '0%',
		'saturation-secondary': '100%',
		'lightness-primary': '0%',
		'lightness-secondary': '100%'
	},
	playdate: {
		'color-primary': '#ffb739',
		'color-secondary': '#6c00ff'
	},
	rebecca: {
		'color-primary': '#663399',
		'color-secondary': '#663399'
	},
	synthwave: {
		'color-primary': '#C724B1',
		'color-secondary': '#71DBD4'
	}
});

/**
 * @param {string} preset
 * @returns {import('./theme').Theme}
 */
export const getThemeFromPreset = (preset) =>
	isPreset(preset) ? PRESETS_THEMES[/** @type Preset */ (preset)] : {};
