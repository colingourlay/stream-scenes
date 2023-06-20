export const install = (): void => {
    if (!window.obsstudio) {
        return;
    }

    window.obsstudio.getStatus((status) => {
        console.log(`[obsstudio::status]`, status);
    });
}