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
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Raleway:wght@400;800&display=swap',
      },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: `https://vuescratch.com/`,
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          '@id': 'https://vuescratch.com#webpage',
          url: 'https://vuescratch.com',
          name: 'VueScratch',
          description:
            'Developing Vue applications from scratch with Vue.js, NuxtJS and SCSS.',
          inLanguage: 'en-US',
          isPartOf: {
            '@type': 'Website',
            '@id': 'https://vuescratch.com/#website',
            url: 'https://vuescratch.com',
            name: 'VueScratch',
            description:
              'Developing Vue applications from scratch with Vue.js, NuxtJS and SCSS.',
            inLanguage: 'en-US',
          },
          about: {
            '@type': 'Organization',
            '@id': 'https://vuescratch.com#organization',
            name: 'VueScratch',
            url: 'https://vuescratch.com',
            sameAs: 'https://twitter.com/vuescratch',
            logo: {
              '@type': 'ImageObject',
              '@id': 'https://vuescratch.com/#logo',
              inLanguage: 'en-US',
              url: 'https://vuescratch.com/icon.png',
              caption: 'VueScratch',
            },
            image: {
              '@type': 'ImageObject',
              '@id': 'https://vuescratch.com/#logo',
              inLanguage: 'en-US',
              url: 'https://vuescratch.com/icon.png',
              caption: 'VueScratch',
            },
            potentialAction: {
              '@type': 'ReadAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://vuescratch.com/',
              },
            },
          },
        },
      },
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
    // '@nuxtjs/amp',
  ],

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
    exclude: ['/articles', '/test'],
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
