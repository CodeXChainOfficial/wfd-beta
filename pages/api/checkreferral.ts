import type { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from "formidable";
import mysql from "serverless-mysql";

export const config = {
  api: {
    bodyParser: false,
  },
};

const db = mysql({
  config: {
    host: "db-mysql-sgp1-60871-do-user-10243971-0.b.db.ondigitalocean.com",
    port: 25060,
    database: "WEFUND",
    user: "doadmin",
    password: "i262IiKD7u6j46NT",
  },
});

export async function executeQuery(query: string) {
  try {
    const results = await db.query(query);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}

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

  if (fields.base != "") {
    let sql =
      "Select * from Referral where base='" +
      fields.base +
      "' and referred='" +
      fields.referred +
      "'";

    const result = await executeQuery(sql);
    if (result.length == 0) {
      sql =
        "INSERT INTO Referral (base, referred) VALUES ('" +
        fields.base +
        "', '" +
        fields.referred +
        "')";
      await executeQuery(sql);
    }
  };

  const sql =
    "Select count(base) as referralCount from Referral where base='" +
    fields.referred +
    "'";
  const result = await executeQuery(sql);
  res.json({
    status: "success",
    data: result[0].referralCount,
  });
}
