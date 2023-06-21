export const install = () => {
	if (!window.obsstudio) {
		return;
	}

	window.obsstudio.getStatus((status) => {
		console.log(`[obsstudio::status]`, status);
	});
};
