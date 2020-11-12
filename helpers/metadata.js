export function homeSchemaOrg() {
  return {
    hid: 'schema.org',
    type: 'application/ld+json',
    json: {
      hid: 'schema.org',
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
  }
}

export function articleMeta({ page }) {
  return [
    {
      hid: 'description',
      name: 'description',
      content: page.fields.description,
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'article',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: page.fields.title,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: page.fields.description,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content:
        'https:' +
        page.fields.heroImage.fields.file.url +
        '?w=1200&h=630&fm=jpg',
    },
    {
      hid: 'og:image:width',
      property: 'og:image:width',
      content: 1200,
    },
    {
      hid: 'og:image:height',
      property: 'og:image:height',
      content: 630,
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: `https://vuescratch.com/${page.fields.slug}/`,
    },
    {
      hid: 'twitter:card',
      property: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      hid: 'twitter:title',
      property: 'twitter:title',
      content: page.fields.title,
    },
    {
      hid: 'twitter:description',
      property: 'twitter:description',
      content: page.fields.description,
    },
    {
      hid: 'twitter:site',
      property: 'twitter:site',
      content: '@vuescratch',
    },
    {
      hid: 'twitter:creator',
      property: 'twitter:creator',
      content: '@vuescratch',
    },
    {
      hid: 'twitter:image',
      property: 'twitter:image',
      content:
        'https:' +
        page.fields.heroImage.fields.file.url +
        '?w=1200&h=600&fm=jpg',
    },
    {
      hid: 'twitter:image:width',
      property: 'twitter:image:width',
      content: 1200,
    },
    {
      hid: 'twitter:image:height',
      property: 'twitter:image:height',
      content: 600,
    },
  ]
}

export function articleSchemaOrg({ page, comments }) {
  const commentsData = comments.map((comment) => {
    return {
      '@type': 'Comment',
      dateCreated: comment.sys.createdAt,
      description: comment.fields.message,
      author: {
        '@type': 'Person',
        name: comment.fields.name,
      },
    }
  })
  return {
    hid: 'schema.org',
    type: 'application/ld+json',
    json: {
      '@context': 'http://schema.org',
      '@type': 'Article',
      name: page.fields.title,
      headline: page.fields.title,
      author: {
        '@type': 'Person',
        name: page.fields.author.fields.name,
      },
      publisher: {
        '@type': 'Person',
        name: page.fields.author.fields.name,
      },
      datePublished: page.sys.createdAt,
      dateModified: page.sys.updatedAt,
      image: 'https:' + page.fields.heroImage.fields.file.url,
      description: page.fields.description,
      url: `https://vuescratch.com/${page.fields.slug}/`,
      comment: commentsData,
      commentCount: commentsData.length,
    },
  }
}
