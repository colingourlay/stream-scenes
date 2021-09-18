import { writable } from 'svelte-local-storage-store';

export default writable<number | null>('countdown', null);
