import type { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from "formidable";
import { executeQuery } from "./checkreferral";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
  const sql = "Select * from Projects";
  const result = await executeQuery(sql);
  res.status(200).json({ data: result });
}
