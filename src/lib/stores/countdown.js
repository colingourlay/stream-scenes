import { persisted } from 'svelte-local-storage-store';

export default persisted('countdown', /** @type {number | null} */ (null));
