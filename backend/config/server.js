module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: "https://strapi-nextjs-demo.onrender.com",
  admin: {
    url: env(
      "ADMIN_BACKEND_URL",
      "https://strapi-nextjs-demo.onrender.com/admin"
    ),
  },
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
