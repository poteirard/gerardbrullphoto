const prismic = require("@prismicio/client");

const sm = require("./sm.json");

/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  const client = prismic.createClient(sm.apiEndpoint);

  const repository = await client.getRepository();
  const locales = repository.languages.map((lang) => lang.id);
  return {
    i18n: {
      locales,
      defaultLocale: locales[0],
    },
    redirects: async () => {
      return [
        {
          source: "/admin",
          destination: `https://${prismic.getRepositoryName(
            sm.apiEndpoint
          )}.prismic.io`,
          permanent: false,
        },
      ];
    },
  };
};

module.exports = nextConfig;
