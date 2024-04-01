// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {"@": "/<rootDir>"},
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/scss/styles.scss'
  ],
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt' 
  ],
  app: {
    head: {
      link: [ 
        {rel: 'icon', type: 'svg', href: '/logo.svg'},
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Gerenciador de Almoxarifado' },
      ]
    }
  }
})
