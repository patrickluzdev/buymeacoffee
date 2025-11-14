// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  runtimeConfig: {
    public: {
      githubUrl: process.env.NUXT_PUBLIC_GITHUB_URL || '',
      linkedinUrl: process.env.NUXT_PUBLIC_LINKEDIN_URL || '',
      instagramUrl: process.env.NUXT_PUBLIC_INSTAGRAM_URL || '',
      coffeePrice: Number(process.env.NUXT_PUBLIC_COFFEE_PRICE) || 5,
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