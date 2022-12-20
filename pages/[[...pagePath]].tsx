import Head from "next/head";
import { SliceZone } from "@prismicio/react";

import { components } from "../slices";

import { Layout } from "../components/Layout";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { createClient, linkResolver } from "../prismicio";
import { asLink } from "@prismicio/helpers";
import { MainSectionLayout } from "../components/MainSectionLayout";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Page = ({ page, navbar }: PageProps) => {
  const { slices } = page.data;
  return (
    <Layout navbar={navbar}>
      <Head>
        <title>{page.data.meta_title}</title>
        <meta
          name="description"
          content={page.data.meta_description || "default"}
        />
        <meta name="keywords" content={page.data.meta_tags || "default"} />
        <meta name="og:type" content="website" />
      </Head>
      {page.type === "home" ? (
        <MainSectionLayout slices={slices} />
      ) : (
        <SliceZone slices={slices} components={components} />
      )}
    </Layout>
  );
};

export default Page;

export async function getStaticProps({
  params,
  previewData,
}: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const uid = params?.pagePath?.[params.pagePath.length - 1];
  let page;

  if (uid) {
    page = await client.getByUID("section", uid);
  } else {
    page = await client.getByUID("home", "home");
  }
  const navbar = await client.getSingle("navbar");

  return {
    props: {
      page,
      navbar,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const [home, pages] = await Promise.all([
    client.getAllByType("home"),
    client.getAllByType("section"),
  ]);

  return {
    paths: [...pages, ...home].map((page) => asLink(page, linkResolver)),
    fallback: false,
  };
}
