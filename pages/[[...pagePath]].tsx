import Head from "next/head";

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
      <MainSectionLayout slices={slices} />
    </Layout>
  );
};

export default Page;

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });
  const [page, navbar] = await Promise.all([
    client.getByUID("home", "home"),
    client.getSingle("navbar"),
  ]);
  return {
    props: {
      page,
      navbar,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const home = await client.getAllByType("home");
  return {
    paths: home.map((page) => asLink(page, linkResolver)),
    fallback: false,
  };
}
