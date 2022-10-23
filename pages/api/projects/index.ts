import type { NextApiRequest, NextApiResponse } from "next";
import { executeQuery } from "../checkreferral";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sql = "Select * from Projects";
  const result: any = await executeQuery(sql);
  console.log(result)
  if (result.error) res.status(500).json(result);
  else res.status(200).json(result);
}
