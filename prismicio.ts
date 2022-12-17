import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
import sm from './sm.json'
import {LinkResolverFunction} from "@prismicio/helpers";
import {CreateClientConfig} from "@prismicio/next";


/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

// Update the routes array to match your project's route structure
export const linkResolver: LinkResolverFunction = (link) => {
    if (link.type === "page") {
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
export const createClient = (config: CreateClientConfig = {}) => {
    const client = prismic.createClient(sm.apiEndpoint);

    prismicNext.enableAutoPreviews({
        client,
        previewData: config.previewData,
        req: config.req,
    });

    return client;
};
