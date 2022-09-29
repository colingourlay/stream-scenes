const THEMEABLE_CUSTOM_PROPERTIES = [
	'hue-text',
	'hue-primary',
	'hue-secondary',
	'saturation-text',
	'saturation-primary',
	'saturation-secondary',
	'lightness-text',
	'lightness-primary',
	'lightness-secondary',
	'alpha-text',
	'alpha-primary',
	'alpha-secondary',
	'color-text',
	'color-primary',
	'color-secondary'
] as const;

export type ThemeableCustomProperty = typeof THEMEABLE_CUSTOM_PROPERTIES[number];

export type Theme = Partial<Record<ThemeableCustomProperty, string>>;

export const DEFAULT_THEME: Required<Theme> = {
	'hue-text': '0',
	'hue-primary': '120',
	'hue-secondary': '240',
	'saturation-text': '0%',
	'saturation-primary': '50%',
	'saturation-secondary': '50%',
	'lightness-text': '100%',
	'lightness-primary': '50%',
	'lightness-secondary': '50%',
	'alpha-text': '1',
	'alpha-primary': '1',
	'alpha-secondary': '1',
	'color-text':
		'hsl(var(--hue-text) var(--saturation-text) var(--lightness-text) / var(--alpha-text))',
	'color-primary':
		'hsl(var(--hue-primary) var(--saturation-primary) var(--lightness-primary) / var(--alpha-primary))',
	'color-secondary':
		'hsl(var(--hue-secondary) var(--saturation-secondary) var(--lightness-secondary) / var(--alpha-secondary))'
};

export const DEFAULT_THEME_DOCUMENT_ELEMENT_CSS = `:root {
  ${Object.entries(DEFAULT_THEME)
		.map(([key, value]) => `--${key}: var(--theme-${key}, ${value})`)
		.join(';\n\t')}
}`;

export const DEFAULT_THEME_DOCUMENT_ELEMENT_STYLE = `<style type="text/css">
${DEFAULT_THEME_DOCUMENT_ELEMENT_CSS}
</style>`;

export const PRESETS = ['abc', 'monochrome', 'playdate', 'rebecca', 'synthwave'] as const;

export type Preset = typeof PRESETS[number];

export const PRESETS_THEMES: Record<Preset, Theme> = {
	abc: {
		'color-primary': '#fdc605'
	},
	monochrome: {
		'saturation-primary': '100%',
		'saturation-secondary': '100%',
		'lightness-primary': '100%',
		'lightness-secondary': '100%'
	},
	playdate: {
		'color-primary': '#fbc651',
		'color-secondary': '#6c00ff'
	},
	rebecca: {
		'color-primary': '#663399'
	},
	synthwave: {
		'color-primary': '#C724B1',
		'color-secondary': '#71DBD4'
	}
} as const;

export const getThemeFromPreset = (scheme: string): Theme => PRESETS_THEMES[scheme] || {};

export const getThemeFromSearchParams = (searchParams: URLSearchParams): Theme =>
	[...searchParams.entries()].reduce((memo, [key, value]) => {
		if (THEMEABLE_CUSTOM_PROPERTIES.includes(key as ThemeableCustomProperty)) {
			memo[key] = value;
		}

		return memo;
	}, getThemeFromPreset(searchParams.get('theme')));
