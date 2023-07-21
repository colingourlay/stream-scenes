import { persisted } from 'svelte-local-storage-store';

export default persisted('preset', /** @type {string | null} */ (null));
