/** @type {import('tailwindcss').Config} */
import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { skeletonTheme } from './skeleton-theme';
import forms from '@tailwindcss/forms';

export default {
  darkMode: 'class',
  content: [
	'./src/**/*.{html,js,svelte,ts}',
	join(require.resolve(
		'@skeletonlabs/skeleton'),
		'../**/*.{html,js,svelte,ts}'
	),
  ],
  theme: {
    extend: {},
  },
  plugins: [
	skeleton({
		themes: {
			custom: [
				skeletonTheme
			]
		}
	}),
	forms
  ],
}
