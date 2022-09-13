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
  const { fields, files } = await new Promise((resolve, reject) => {
    const form = new IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });

  const sql = `insert into Whitelist (project_id, wallet, email, telegram, fundraise) values(${fields.project_id},'${fields.wallet}','${fields.email}','${fields.telegram}','${fields.fundraise}')`;
  const result = await executeQuery(sql);

  res.status(200).json({ data: true });
}
