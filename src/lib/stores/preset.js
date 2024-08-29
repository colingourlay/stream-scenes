import { persisted } from 'svelte-persisted-store';

export default persisted('preset', /** @type {string | null} */ (null));
