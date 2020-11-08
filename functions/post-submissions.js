exports.handler = function (event) {
  const contentful = require('contentful-management')
  const client = contentful.createClient({
    accessToken: process.env.CF_MANAGEMENT_TOKEN,
  })

  const body = JSON.parse(event.body)

  // Create entry.
  return client
    .getSpace('9v9v1k9l1c6k')
    .then((space) => space.getEnvironment('master'))
    .then((environment) =>
      environment.createEntry('submission', {
        fields: {
          name: {
            'en-US': body.name || null,
          },
          email: {
            'en-US': body.email || null,
          },
          message: {
            'en-US': body.message || null,
          },
          type: {
            'en-US': body.type || null,
          },
          path: {
            'en-US': body.path || null,
          },
        },
      })
    )
}
