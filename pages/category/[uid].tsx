import Head from "next/head";
import { SliceZone } from "@prismicio/react";

import { components } from "../../slices";

import { Layout } from "../../components/Layout";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { createClient, linkResolver } from "../../prismicio";
import { asLink } from "@prismicio/helpers";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Page = ({ page, navbar, footer }: PageProps) => {
  const { slices, title } = page?.data;
  return (
    <Layout navbar={navbar} altLangs={page.alternate_languages} footer={footer}>
      <Head>
        <title>{page?.data.meta_title}</title>
        <meta
          name="description"
          content={page?.data.meta_description || "default"}
        />
        <meta name="keywords" content={page?.data.meta_tags || "default"} />
        <meta name="og:type" content="website" />
      </Head>
      <div className="container m-auto dark:bg-gray-900">
        <h1 className="text-center pt-3 pb-10 text-2xl text-shadow-white">
          {title}
        </h1>
        <div className="flex content-center items-center flex-col">
          <SliceZone slices={slices} components={components} />
        </div>
      </div>
    </Layout>
  );
};

export default Page;

export async function getStaticProps({
  params,
  previewData,
  locale,
}: GetStaticPropsContext) {
  const client = createClient({ previewData });
  const [page, navbar, footer] = await Promise.all([
    client.getByUID("section", params?.uid as string, { lang: locale }),
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

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("section", { lang: "*" });
  const paths = pages.map((page) => {
    return {
      params: {
        uid: page.uid,
      },
      locale: page.lang,
    };
  });
  return {
    paths,
    fallback: false,
  };
}
