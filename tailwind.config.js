/** @type {import('tailwindcss').Config} */
export default {
    // darkMode: ['media'], // auto
    darkMode: ['selector', '.dark-mode'],
    // darkMode: 'class',
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
        "./error.vue",
	],
	theme: {
        extend: {
            colors: {
                "off-white": '#FAF9F6',
                "off-black": '#1A1A1A',
                cello: {
                    50: '#f1f7fe',
                    100: '#e3edfb',
                    200: '#c1dbf6',
                    300: '#89bef0',
                    400: '#4b9de5',
                    500: '#2380d4',
                    600: '#1564b4',
                    700: '#125092',
                    800: '#134479',
                    900: '#153962',
                    950: '#0e2543',
                },
            },
        },
	},
    plugins: [],
}

