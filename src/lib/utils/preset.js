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
	canva: `linear-gradient(to bottom right, var(--color-primary), var(--color-secondary))`,
	synthwave: `linear-gradient(0deg, var(--color-primary) 50%, var(--color-secondary))`
});

/** @type {Record<Preset, import('./theme').Theme>} */
export const PRESETS_THEMES = /** @type {const} */ ({
	abc: {
		'color-primary': '#fdc605',
		'color-secondary': '#fdc605'
	},
	canva: {
		'hue-primary': '182.35',
		'hue-secondary': '266.21',
		'saturation-primary': '100%',
		'saturation-secondary': '80.51%',
		'lightness-primary': '40%',
		'lightness-secondary': '53.73%'
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
