import { persisted } from 'svelte-local-storage-store';

export default persisted<number | null>('countdown', null);
