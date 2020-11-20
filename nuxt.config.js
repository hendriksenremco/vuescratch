import { homeSchemaOrg } from './helpers/metadata'

const createSitemapRoutes = async () => {
  const routes = []
  const { createClient } = require('./plugins/contentful.js')
  const client = createClient()
  const articles = await client.getEntries({
    content_type: 'blogPost',
    order: '-sys.createdAt',
  })
  for (const article of articles.items) {
    routes.push(`/${article.fields.slug}/`)
  }
  return routes
}
const createPreviewRoutes = async () => {
  const previewRoutes = []
  const { createPreviewClient } = require('./plugins/contentful.js')
  const client = createPreviewClient()
  const articles = await client.getEntries({
    content_type: 'blogPost',
    order: '-sys.createdAt',
  })
  for (const article of articles.items) {
    previewRoutes.push(`/${article.fields.slug}/`)
  }
  return previewRoutes
}

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  modern: process.env.NODE_ENV === 'production' ? 'client' : false,
  server: {
    host: '0.0.0.0',
  },

  generate: {
    fallback: true,
    routes: createPreviewRoutes,
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: (titleChunk) => {
      // If undefined or blank then we don't need the hyphen
      return titleChunk ? `${titleChunk} - VueScratch` : 'VueScratch'
    },
    htmlAttrs: {
      lang: 'en',
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
        rel: 'alternate',
        type: 'application/rss+xml',
        title: 'RSS 2.0',
        href: 'https://vuescratch.com/feed.rss',
      },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: `https://vuescratch.com/`,
      },
      {
        rel: 'preconnect',
        href: 'https://pagead2.googlesyndication.com',
        crossorigin: true,
      },
      {
        rel: 'preconnect',
        href: 'https://tpc.googlesyndication.com',
        crossorigin: true,
      },
    ],
    script: [
      homeSchemaOrg(),
      // {
      //   'data-ad-client': 'ca-pub-4674696175162885',
      //   src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      //   defer: true,
      // },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/contentful.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '~/components',
    { path: '~/components/Article/', prefix: 'article' },
    { path: '~/components/Comments/', prefix: 'comments' },
    { path: '~/components/Form/', prefix: 'form' },
    { path: '~/components/Icons/', prefix: 'icon' },
  ],
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/dotenv',
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
    'nuxt-rfg-icon',
    '@nuxtjs/google-gtag',
    '@nuxtjs/feed',
    'nuxt-facebook-pixel-module',
    // 'nuxt-webfontloader',
    // '@nuxtjs/google-adsense',
  ],

  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: '1595122517186326',
    autoPageView: true,
    disabled: false,
  },

  // 'google-adsense': {
  //   id: 'ca-pub-4674696175162885',
  // },

  feed: [
    {
      path: '/feed.rss',
      create: async (feed) => {
        const { createClient } = require('./plugins/contentful.js')
        const marked = require('marked')
        const client = createClient()
        const articles = await client.getEntries({
          content_type: 'blogPost',
          order: '-sys.createdAt',
        })
        for (const article of articles.items) {
          feed.addItem({
            title: article.fields.title,
            id: article.fields.slug,
            link: `https://vuescratch.com/${article.fields.slug}`,
            description: article.fields.description,
            content: marked(article.fields.body),
          })
        }
      },
      cacheTime: 1000 * 60 * 15, // How long should the feed be cached
      type: 'rss2',
    },
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  'google-gtag': {
    id: 'G-5XGBF923P4',
  },

  sitemap: {
    hostname: 'https://vuescratch.com',
    gzip: true,
    exclude: ['/articles', '/test', '/privacy'],
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

  env: {
    CF_ACCESS_TOKEN: process.env.CF_ACCESS_TOKEN,
    CF_PREVIEW_TOKEN: process.env.CF_PREVIEW_TOKEN,
  },
}
