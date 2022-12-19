import * as prismicNext from "@prismicio/next";

import { createClient, linkResolver } from "../../prismicio";
import { NextApiHandler } from "next";

const Route: NextApiHandler = async (req, res) => {
  const client = createClient({ req });

  prismicNext.setPreviewData({ req, res });

  await prismicNext.redirectToPreviewURL({ req, res, client, linkResolver });
};

export default Route;
