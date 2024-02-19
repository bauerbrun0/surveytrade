import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const skeletonTheme: CustomThemeConfig = {
    name: 'skeleton-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #6C28C2 
		"--color-primary-50": "233 223 246", // #e9dff6
		"--color-primary-100": "226 212 243", // #e2d4f3
		"--color-primary-200": "218 201 240", // #dac9f0
		"--color-primary-300": "196 169 231", // #c4a9e7
		"--color-primary-400": "152 105 212", // #9869d4
		"--color-primary-500": "108 40 194", // #6C28C2
		"--color-primary-600": "97 36 175", // #6124af
		"--color-primary-700": "81 30 146", // #511e92
		"--color-primary-800": "65 24 116", // #411874
		"--color-primary-900": "53 20 95", // #35145f
		// secondary | #353535 
		"--color-secondary-50": "225 225 225", // #e1e1e1
		"--color-secondary-100": "215 215 215", // #d7d7d7
		"--color-secondary-200": "205 205 205", // #cdcdcd
		"--color-secondary-300": "174 174 174", // #aeaeae
		"--color-secondary-400": "114 114 114", // #727272
		"--color-secondary-500": "53 53 53", // #353535
		"--color-secondary-600": "48 48 48", // #303030
		"--color-secondary-700": "40 40 40", // #282828
		"--color-secondary-800": "32 32 32", // #202020
		"--color-secondary-900": "26 26 26", // #1a1a1a
		// tertiary | #FF4BFF 
		"--color-tertiary-50": "255 228 255", // #ffe4ff
		"--color-tertiary-100": "255 219 255", // #ffdbff
		"--color-tertiary-200": "255 210 255", // #ffd2ff
		"--color-tertiary-300": "255 183 255", // #ffb7ff
		"--color-tertiary-400": "255 129 255", // #ff81ff
		"--color-tertiary-500": "255 75 255", // #FF4BFF
		"--color-tertiary-600": "230 68 230", // #e644e6
		"--color-tertiary-700": "191 56 191", // #bf38bf
		"--color-tertiary-800": "153 45 153", // #992d99
		"--color-tertiary-900": "125 37 125", // #7d257d
		// success | #26a269 
		"--color-success-50": "222 241 233", // #def1e9
		"--color-success-100": "212 236 225", // #d4ece1
		"--color-success-200": "201 232 218", // #c9e8da
		"--color-success-300": "168 218 195", // #a8dac3
		"--color-success-400": "103 190 150", // #67be96
		"--color-success-500": "38 162 105", // #26a269
		"--color-success-600": "34 146 95", // #22925f
		"--color-success-700": "29 122 79", // #1d7a4f
		"--color-success-800": "23 97 63", // #17613f
		"--color-success-900": "19 79 51", // #134f33
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #c01c28 
		"--color-error-50": "246 221 223", // #f6dddf
		"--color-error-100": "242 210 212", // #f2d2d4
		"--color-error-200": "239 198 201", // #efc6c9
		"--color-error-300": "230 164 169", // #e6a4a9
		"--color-error-400": "211 96 105", // #d36069
		"--color-error-500": "192 28 40", // #c01c28
		"--color-error-600": "173 25 36", // #ad1924
		"--color-error-700": "144 21 30", // #90151e
		"--color-error-800": "115 17 24", // #731118
		"--color-error-900": "94 14 20", // #5e0e14
		// surface | #1d1d1d 
		"--color-surface-50": "221 221 221", // #dddddd
		"--color-surface-100": "210 210 210", // #d2d2d2
		"--color-surface-200": "199 199 199", // #c7c7c7
		"--color-surface-300": "165 165 165", // #a5a5a5
		"--color-surface-400": "97 97 97", // #616161
		"--color-surface-500": "29 29 29", // #1d1d1d
		"--color-surface-600": "26 26 26", // #1a1a1a
		"--color-surface-700": "22 22 22", // #161616
		"--color-surface-800": "17 17 17", // #111111
		"--color-surface-900": "14 14 14", // #0e0e0e
		
	}
}