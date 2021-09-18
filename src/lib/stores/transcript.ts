import { get } from 'svelte/store';
import { writable } from 'svelte-local-storage-store';

type TranscriptStoreValue = {
	recentLines: string[];
	interimLine: string | null;
};

const DEFAULT: TranscriptStoreValue = {
	recentLines: [],
	interimLine: null
};

const store = writable<TranscriptStoreValue>('transcript', DEFAULT);
const { set, subscribe } = store;

export default {
	reset: (): void => set(DEFAULT),
	addLine: (line: string): void => {
		const { recentLines } = get(store);

		recentLines.push(line);

		set({
			recentLines: recentLines.slice(-5),
			interimLine: null
		});
	},
	updateInterimLine: (line: string): void => {
		const { recentLines } = get(store);

		set({
			recentLines,
			interimLine: line
		});
	},
	set,
	subscribe
};
