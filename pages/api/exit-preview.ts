
import * as prismicNext from "@prismicio/next";
import {NextApiHandler} from "next";

const Route: NextApiHandler = async function handler(req, res) {
    prismicNext.exitPreview({ res, req });
}
export default Route;