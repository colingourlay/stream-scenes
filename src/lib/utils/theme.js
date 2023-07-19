const THEMEABLE_CUSTOM_PROPERTIES = /** @type {const} */ ([
	'hue-primary',
	'hue-secondary',
	'saturation-primary',
	'saturation-secondary',
	'lightness-primary',
	'lightness-secondary',
	'alpha-primary',
	'alpha-secondary',
	'color-primary',
	'color-secondary',
	'angle-linear-gradient'
]);

/**
 * @typedef {typeof THEMEABLE_CUSTOM_PROPERTIES[number]} ThemeableCustomProperty
 */

/**
 * @param {string} key
 * @returns {value is ThemeableCustomProperty}
 */
const isThemeableCustomProperty = (key) => {
	return THEMEABLE_CUSTOM_PROPERTIES.includes(/** @type ThemeableCustomProperty */ (key));
};

/**
 * @typedef {Partial<Record<ThemeableCustomProperty, string>>} Theme
 */

/** @type {Required<Theme>} */
export const DEFAULT_THEME = {
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
		'hsl(var(--hue-secondary) var(--saturation-secondary) var(--lightness-secondary) / var(--alpha-secondary))',
	'angle-linear-gradient': '0deg'
};

const DEFAULT_THEME_DOCUMENT_ELEMENT_CSS = `:root {
  ${Object.entries(DEFAULT_THEME)
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
		'hue-primary': '264.12',
		'hue-secondary': '182.35',
		'saturation-primary': '100%',
		'saturation-secondary': '100%',
		'lightness-primary': '61.96%',
		'lightness-secondary': '40%',
		'angle-linear-gradient': '135deg'
	},
	monochrome: {
		'saturation-primary': '100%',
		'saturation-secondary': '0%',
		'lightness-primary': '100%',
		'lightness-secondary': '0%'
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
export const PRESETS_GRADIENTS = /** @type {const} */ ({
	canva: 'linear'
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
