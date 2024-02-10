// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {"@": "/<rootDir>"},
  css: [
    '~/assets/scss/styles.scss'
  ],
  modules: [
    '@pinia/nuxt' 
  ],
})
