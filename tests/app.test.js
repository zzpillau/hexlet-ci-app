const fs = require('fs');
const { setupStrapi } = require('./helpers/strapi.js');

/** this code is called once before any test is called */
beforeAll(async () => {
  await setupStrapi(); // singleton so it can be called many times
});

/** this code is called once before all the tested are finished */
afterAll(async () => {
  // eslint-disable-next-line no-undef
  const dbSettings = strapi.config.get('database.connections.default.settings');

  // close server to release the db-file
  await strapi.destroy(); // eslint-disable-line no-undef

  // delete test database after all tests
  if (dbSettings && dbSettings.filename) {
    const tmpDbFile = `${__dirname}/../${dbSettings.filename}`;
    if (fs.existsSync(tmpDbFile)) {
      fs.unlinkSync(tmpDbFile);
    }
  }
});

it('strapi is defined', () => {
  // eslint-disable-next-line no-undef
  expect(strapi).toBeDefined();
});
