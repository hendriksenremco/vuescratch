const createSitemapRoutes = async () => {
  const routes = []
  const { $content } = require('@nuxt/content')
  const articles = await $content('articles').fetch()
  for (const article of articles) {
    routes.push(`/${article.slug}/`)
  }
  return routes
}

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  server: {
    host: '0.0.0.0',
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: (titleChunk) => {
      // If undefined or blank then we don't need the hyphen
      return titleChunk ? `${titleChunk} - VueScratch` : 'VueScratch'
    },
    htmlAttrs: {
      lang: 'en',
      amp: true,
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'robots',
        content:
          'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Developing Vue applications from scratch with Vue.js, NuxtJS and SCSS.',
      },
      {
        hid: 'fb:app_id',
        property: 'fb:app_id',
        content: '754951361756185',
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'en_US',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'VueScratch',
      },
      {
        hid: 'og:description',
        property: 'og:title',
        content:
          'Developing Vue applications from scratch with Vue.js, NuxtJS and SCSS.',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'VueScratch',
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Raleway:wght@400;800&display=swap',
      },
      {
        rel: 'canonical',
        href: `https://vuescratch.com/`,
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '~/components',
    { path: '~/components/Article/', prefix: 'article' },
  ],
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
    'nuxt-rfg-icon',
    '@nuxtjs/google-gtag',
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  'google-gtag': {
    id: 'G-5XGBF923P4',
  },

  sitemap: {
    hostname: 'https://vuescratch.com',
    gzip: true,
    exclude: ['/articles'],
    routes: createSitemapRoutes,
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    publicPath: process.env.NODE_ENV === 'production' ? 'assets/' : null,
  },

  styleResources: {
    scss: ['~/assets/scss/variables.scss'],
  },

  router: {
    trailingSlash: true,
  },
}
