import { writable } from 'svelte/store';

export const guessedWords = writable<string[]>([]);
export const correctWord = writable('');
export const guesses = writable(0);
export const currentInput = writable('');
