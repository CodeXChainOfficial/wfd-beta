import type { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from "formidable";
import { executeQuery } from "../checkreferral";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const fields = req.body;
  console.log(fields);

  const sql = `Insert into Projects Values('${fields.creator_wallet}', '${fields.project_id}', '${fields.project_company}', '${fields.project_title}', '${fields.project_description}', '${fields.project_option}','${fields.project_ecosystem}', '${fields.project_fundtype}', 'PRELAUNCH', '${fields.project_createddate}', '${fields.project_saft}', '${fields.project_logo}', '${fields.project_whitepaper}', '${fields.project_website}', '${fields.project_email}', '${fields.project_telegram}', '${fields.project_teammembers}', '${fields.token_addr}', '${fields.country}', '${fields.cofounder_name}', '${fields.service_wefund}', '${fields.service_charity}')`;

  console.log(sql);

  const result: any = await executeQuery(sql);
  if (result.error) {
    res.status(500).json(result);
  } else res.status(200).json(result);
}
