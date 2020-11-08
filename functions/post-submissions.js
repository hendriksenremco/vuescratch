exports.handler = function (event) {
  const contentful = require('contentful-management')
  const client = contentful.createClient({
    accessToken: process.env.CF_MANAGEMENT_TOKEN,
  })

  // Create entry.
  return client
    .getSpace('9v9v1k9l1c6k')
    .then((space) => space.getEnvironment('master'))
    .then((environment) =>
      environment.createEntry('submission', {
        fields: {
          name: {
            'en-US': event.body.name || null,
          },
          email: {
            'en-US': event.body.email || null,
          },
          message: {
            'en-US': event.body.message || null,
          },
          type: {
            'en-US': event.body.type || null,
          },
          path: {
            'en-US': event.body.path || null,
          },
        },
      })
    )
}
