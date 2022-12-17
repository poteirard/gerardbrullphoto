import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient, linkResolver } from "../prismicio";
import { components } from "../slices";

import { Layout } from "../components/Layout";
import {GetStaticPropsContext, InferGetStaticPropsType} from "next";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Page = ({ page }: PageProps) => {
    return (
        <Layout>
            <Head>
                <title>{page.data.title}</title>
            </Head>
            <SliceZone slices={page.data.slices} components={components} />
        </Layout>
    );
};

export default Page;

export async function getStaticProps({ params, previewData }: GetStaticPropsContext) {
    const client = createClient({ previewData });

    const uid = params?.path?.[params.path.length - 1];
    let page;
    if (uid) {
        page = await client.getByUID("section", uid);
    } else {
        page = await client.getByUID("home", "home");
    }
    return {
        props: {
            page,
        },
    };
}

export async function getStaticPaths() {
    const client = createClient();

    const pages = await client.getAllByType("section");

    return {
        paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
        fallback: false,
    };
}