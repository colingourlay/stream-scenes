export const getThemeFromSearchParams = (searchParams: URLSearchParams): Record<string, string> =>
	[...searchParams.entries()].reduce((memo, [key, value]) => {
		if (key.indexOf('theme-') === 0) {
			memo[key.slice(6)] = value;
		}

		return memo;
	}, {});
