import type { NextApiRequest, NextApiResponse } from "next";
import { executeQuery } from "../checkreferral";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const sql = `Insert into Investors Values('${req.body.wallet}', '${req.body.amount}', '${req.body.wfd_amount}','${req.body.date}')`;
    console.log(sql);

    const result: any = await executeQuery(sql);
    console.log(result)
    if (result.error) {
      res.status(500).json(result);
    } else res.status(200).json(result);
  }
}
