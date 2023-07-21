const THEMEABLE_CUSTOM_PROPERTIES_DEFAULTS = /** @type {const} */ ({
	'hue-primary': '120',
	'hue-secondary': '240',
	'saturation-primary': '50%',
	'saturation-secondary': '50%',
	'lightness-primary': '50%',
	'lightness-secondary': '50%',
	'alpha-primary': '1',
	'alpha-secondary': '1',
	'color-primary':
		'hsl(var(--hue-primary) var(--saturation-primary) var(--lightness-primary) / var(--alpha-primary))',
	'color-secondary':
		'hsl(var(--hue-secondary) var(--saturation-secondary) var(--lightness-secondary) / var(--alpha-secondary))'
});

/**
 * @typedef {keyof typeof THEMEABLE_CUSTOM_PROPERTIES_DEFAULTS} ThemeableCustomProperty
 */

/**
 * @typedef {Partial<Record<ThemeableCustomProperty, string>>} Theme
 */

/**
 * @param {string} key
 * @returns {value is ThemeableCustomProperty}
 */
const isThemeableCustomProperty = (key) => {
	return key in THEMEABLE_CUSTOM_PROPERTIES_DEFAULTS;
};

const DEFAULT_THEME_DOCUMENT_ELEMENT_CSS = `:root {
  ${Object.entries(THEMEABLE_CUSTOM_PROPERTIES_DEFAULTS)
		.map(([key, value]) => `--${key}: var(--theme-${key}, ${value})`)
		.join(';\n\t')}
}`;

export const DEFAULT_THEME_DOCUMENT_ELEMENT_STYLE = `<style type="text/css">
${DEFAULT_THEME_DOCUMENT_ELEMENT_CSS}
</style>`;

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

/** @type {Record<Preset, Theme>} */
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

/** @type {Record<string, string>} */
export const PRESETS_IMAGES = /** @type {const} */ ({
	// canva: `linear-gradient(120deg, #00c4cc 11%, #72be44 23%, #fd0 37%, #fbbf0a 40%, #f79d16 46%, #f5891d 50%, #f48120 53%, #ee402f 66%, #ed3e75 80%, #df3c83 81%, #bc35a7 84%, #a030c4 88%, #8d2dd8 91%, #812be4 94%, #7d2ae8 98%)`,
	canva: `linear-gradient(120deg, var(--color-primary), var(--color-primary) 30%, #6420ff 50%, var(--color-secondary) 80%)`
});

/**
 * @param {string} preset
 * @returns {Theme}
 */
export const getThemeFromPreset = (preset) =>
	isPreset(preset) ? PRESETS_THEMES[/** @type Preset */ (preset)] : {};

/**
 * @param {URLSearchParams} searchParams
 * @returns {Theme}
 */
export const getThemeFromSearchParams = (searchParams) =>
	[...searchParams.entries()].reduce((memo, [key, value]) => {
		if (isThemeableCustomProperty(key)) {
			memo[/** @type ThemeableCustomProperty */ (key)] = value;
		}

		return memo;
	}, /** @type {Theme} */ ({}));
