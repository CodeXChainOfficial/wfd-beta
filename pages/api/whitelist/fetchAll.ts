import type { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from "formidable";
import { executeQuery } from "../checkreferral";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sql = "select * from Whitelist";
  const result = await executeQuery(sql);

  res.status(200).json({ data: result });
}
