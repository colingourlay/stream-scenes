const THEMEABLE_CUSTOM_PROPERTIES = [
	'hue-primary',
	'hue-secondary',
	'saturation-primary',
	'saturation-secondary',
	'lightness-primary',
	'lightness-secondary',
	'alpha-primary',
	'alpha-secondary',
	'color-primary',
	'color-secondary'
] as const;

export type ThemeableCustomProperty = typeof THEMEABLE_CUSTOM_PROPERTIES[number];

export type Theme = Partial<Record<ThemeableCustomProperty, string>>;

export const DEFAULT_THEME: Required<Theme> = {
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
};

export const DEFAULT_THEME_DOCUMENT_ELEMENT_CSS = `:root {
  ${Object.entries(DEFAULT_THEME)
		.map(([key, value]) => `--${key}: var(--theme-${key}, ${value})`)
		.join(';\n\t')}
}`;

export const DEFAULT_THEME_DOCUMENT_ELEMENT_STYLE = `<style type="text/css">
${DEFAULT_THEME_DOCUMENT_ELEMENT_CSS}
</style>`;

export const PRESETS = ['abc', 'canva', 'monochrome', 'playdate', 'rebecca', 'synthwave'] as const;

export type Preset = typeof PRESETS[number];

export const PRESETS_THEMES: Record<Preset, Theme> = {
	abc: {
		'color-primary': '#fdc605'
	},
	canva: {
		'hue-primary': '264.12',
		'saturation-primary': '100%',
		'lightness-primary': '61.96%'
	},
	monochrome: {
		'saturation-primary': '100%',
		'saturation-secondary': '100%',
		'lightness-primary': '100%',
		'lightness-secondary': '100%'
	},
	playdate: {
		'color-primary': '#ffb739',
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
