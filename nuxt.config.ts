// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {"@": "/<rootDir>"},
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/scss/styles.scss'
  ],
  modules: [
    '@pinia/nuxt' 
  ],
  app: {
    head: {
      link: [ 
        {rel: 'icon', type: 'svg', href: '/logo.svg'} 
      ]
    }
  }
})
