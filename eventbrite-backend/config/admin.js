module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '25b0c1ded7b4ccc68a1d171370978398'),
  },
});
