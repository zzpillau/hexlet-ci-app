const Strapi = require('@strapi/strapi');

let instance;

async function setupStrapi() {
  if (!instance) {
    /** the following code in copied from `./node_modules/strapi/lib/Strapi.js` */
    await Strapi().load();
    // eslint-disable-next-line no-undef
    instance = strapi; // strapi is global now
  }
  return instance;
}
module.exports = { setupStrapi };
