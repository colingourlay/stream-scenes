import { persisted } from 'svelte-persisted-store';

export default persisted('countdown', /** @type {number | null} */ (null));
