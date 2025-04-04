import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxt/fonts'],

    css: ['~/assets/main.css'],

    vite: {
        plugins: [tailwindcss()]
    },

    compatibilityDate: '2024-11-01'
});
