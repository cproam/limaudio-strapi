export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            's3.twcstorage.ru',
            '37490647-limaudio.s3.ru-1.twcstorage.ru',
            '37490647-limaudio.s3.twcstorage.ru',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            's3.twcstorage.ru',
            '37490647-limaudio.s3.ru-1.twcstorage.ru',
            '37490647-limaudio.s3.twcstorage.ru',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
