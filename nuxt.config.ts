// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            title: process.env.APP_NAME ?? 'Nuxt Website',
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ],
            htmlAttrs: {
                lang: 'en'
            },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	runtimeConfig: {
		public: {
			directusUrl: process.env.DIRECTUS_URL ?? "http://localhost:8055",
		},
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
    directus: {
		url: process.env.DIRECTUS_URL ?? "http://localhost:8055",
        autoRefresh: true,
	},
    modules: ["@nuxt/icon", "nuxt-directus"],
})
