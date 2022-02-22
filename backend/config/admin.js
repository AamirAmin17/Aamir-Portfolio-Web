module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9214cc359a996f940b75213430035233'),
  },
});
