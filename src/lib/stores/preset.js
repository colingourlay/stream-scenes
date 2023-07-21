import { persisted } from 'svelte-local-storage-store';

export default persisted('global-theme-preset', /** @type {string | null} */ (null));
