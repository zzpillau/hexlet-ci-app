module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4f953ba1dbf509a1479909a087f7507a'),
  },
});
