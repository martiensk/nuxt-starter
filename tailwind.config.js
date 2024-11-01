import prose from '@tailwindcss/typography';
import aspect from '@tailwindcss/aspect-ratio';
import containers from '@tailwindcss/container-queries';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {}
    },
    corePlugins: {
        aspectRatio: false
    },
    plugins: [prose, aspect, containers, daisyui],
    daisyui: {
        themes: ['retro', 'coffee'],
        darkTheme: 'coffee'
    }
};
