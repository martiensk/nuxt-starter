// eslint.config.js
import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import vueeslint from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import jsdoc from 'eslint-plugin-jsdoc';
import regexp from 'eslint-plugin-regexp';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

export default [
    {
        ignores: ['**/dist/**', 'node_modules/**', '.nuxt/**', '.output/**']
    },
    {
        files: ['**/*.{js,mjs,cjs,jsx,ts,tsx,vue}'],
        plugins: {
            '@typescript-eslint': tseslint,
            vue: vueeslint,
            jsdoc: jsdoc,
            regexp: regexp,
            import: importPlugin
        },
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: tsParser,
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: false
                }
            },
            globals: {
                ...globals.browser,
                // Vue globals
                Vue: 'readonly',
                defineProps: 'readonly',
                defineEmits: 'readonly',
                defineExpose: 'readonly',
                // Nuxt globals
                defineNuxtConfig: 'readonly',
                defineNuxtPlugin: 'readonly',
                defineNuxtRouteMiddleware: 'readonly',
                definePageMeta: 'readonly',
                useAsyncData: 'readonly',
                useFetch: 'readonly',
                useRoute: 'readonly',
                useRouter: 'readonly',
                useState: 'readonly',
                useRuntimeConfig: 'readonly',
                useNuxtApp: 'readonly',
                useError: 'readonly',
                computed: 'readonly',
                ref: 'readonly',
                reactive: 'readonly',
                onMounted: 'readonly',
                watch: 'readonly'
            }
        },
        settings: {
            'import/resolver': {
                typescript: true,
                node: true
            }
        },
        rules: {
            ...eslint.configs.recommended.rules,
            ...tseslint.configs.recommended.rules,
            ...vueeslint.configs['vue3-recommended'].rules,
            ...regexp.configs.recommended.rules,
            'import/no-unresolved': 'off',
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/no-explicit-any': 'warn'
        }
    }
];
