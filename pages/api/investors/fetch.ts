import type { NextApiRequest, NextApiResponse } from "next";
import { executeQuery } from "../checkreferral";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sql = `Select * from Investors Where wallet='${req.body.wallet}'`;
  const result: any = await executeQuery(sql);
  if (result.error) {
    res.status(500).json(result);
    return;
  }

  let amount = 0,
    wfd_amount = 0;
  for (let i = 0; i < result.length; i++) {
    amount += result[i].amount;
    wfd_amount += result[i].wfd_amount;
  }
  res.status(200).json({ amount, wfd_amount });
}
