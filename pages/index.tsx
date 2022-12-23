import Head from "next/head";

import { Layout } from "../components/Layout";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { createClient, linkResolver } from "../prismicio";
import { asLink } from "@prismicio/helpers";
import { MainSectionLayout } from "../components/MainSectionLayout";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Page = ({ page, navbar, footer }: PageProps) => {
  const { slices } = page.data;
  return (
    <Layout navbar={navbar} footer={footer} altLangs={page.alternate_languages}>
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

export async function getStaticProps({
  previewData,
  locale,
}: GetStaticPropsContext) {
  const client = createClient({ previewData });
  const [page, navbar, footer] = await Promise.all([
    client.getByUID("home", "home", { lang: locale }),
    client.getSingle("navbar", { lang: locale }),
    client.getSingle("footer", { lang: locale }),
  ]);
  return {
    props: {
      page,
      navbar,
      footer,
    },
  };
}
