// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from 'node:url';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  alias: {
    '~/app': fileURLToPath(new URL('./app', import.meta.url)),
    '~/server': fileURLToPath(new URL('./server', import.meta.url)),
  },
  runtimeConfig: {
    mercadoPagoAccessToken: process.env.MERCADOPAGO_ACCESS_TOKEN || '',
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || 'http://localhost:3000',
      githubUrl: process.env.NUXT_PUBLIC_GITHUB_URL || '',
      linkedinUrl: process.env.NUXT_PUBLIC_LINKEDIN_URL || '',
      instagramUrl: process.env.NUXT_PUBLIC_INSTAGRAM_URL || '',
      coffeePrice: Number(process.env.NUXT_PUBLIC_COFFEE_PRICE) || 5,
      mercadoPagoPublicKey: process.env.NUXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY || '',
    }
  },
  modules: [
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/icon'
  ]
})