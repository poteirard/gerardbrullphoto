import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import sm from "./sm.json";
import { CreateClientConfig } from "@prismicio/next";
import { LinkResolverFunction } from "@prismicio/helpers";

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

/**
 * The project's Prismic Route Resolvers. This list determines a Prismic document's URL.
 *
 * @type {prismic.ClientConfig['routes']}
 */
const routes = [
  {
    type: "section",
    path: "/:uid",
  },
  {
    type: "home",
    uid: "home",
    path: "/",
  },
];

export const linkResolver: LinkResolverFunction = (link) => {
  if (link.type === "section" || link.type === "home") {
    if (link.uid === "home") {
      return "/";
    }

    return `/${link.uid}`;
  }

  return "/";
};
/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const createClient = ({
  previewData,
  req,
  ...config
}: CreateClientConfig = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    routes,
    ...config,
  });

  prismicNext.enableAutoPreviews({ client, previewData, req });

  return client;
};
