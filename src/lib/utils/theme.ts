export const getThemeFromURLSearchParams = (params: URLSearchParams): Record<string, string> =>
	[...params.entries()].reduce((memo, [key, value]) => {
		if (key.indexOf('theme-') === 0) {
			memo[key.slice(6)] = value;
		}

		return memo;
	}, {});
