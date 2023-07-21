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

const DEFAULT_THEME_DOCUMENT_ELEMENT_CSS = `:root {
  ${Object.entries(THEMEABLE_CUSTOM_PROPERTIES_DEFAULTS)
		.map(([key, value]) => `--${key}: var(--theme-${key}, ${value})`)
		.join(';\n\t')}
}`;

export const DEFAULT_THEME_DOCUMENT_ELEMENT_STYLE = `<style type="text/css">
${DEFAULT_THEME_DOCUMENT_ELEMENT_CSS}
</style>`;

/**
 * @param {string} key
 * @returns {value is ThemeableCustomProperty}
 */
const isThemeableCustomProperty = (key) => {
	return key in THEMEABLE_CUSTOM_PROPERTIES_DEFAULTS;
};

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

/**
 * @param {Theme} theme
 */
export const applyTheme = (theme) => {
	document.documentElement.setAttribute('style', '');
	Object.entries(theme).forEach(([key, value]) => {
		document.documentElement.style.setProperty(`--theme-${key}`, value);
	});
};
