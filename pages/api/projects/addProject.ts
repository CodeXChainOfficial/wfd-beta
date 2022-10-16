import type { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from "formidable";
import { executeQuery } from "../checkreferral";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const data: any = await new Promise((resolve, reject) => {
  //   const form = new IncomingForm();

  //   form.parse(req, (err, fields, files) => {
  //     if (err) return reject(err);
  //     resolve({ fields, files });
  //   });
  // });
  const fields = req.body;
  console.log(fields);

  const sql = `Insert into Projects Values('${fields.creator_wallet}', '${fields.project_id}', '${fields.project_company}', '${fields.project_title}', '${fields.project_description}', '${fields.project_ecosystem}', '${fields.project_fundtype}', 'PRELAUNCH', '${fields.project_createddate}', '${fields.project_saft}', '${fields.project_logo}', '${fields.project_whitepaper}', '${fields.project_website}', '${fields.project_email}', '${fields.project_teammembers}', '${fields.token_addr}', '${fields.country}', '${fields.cofounder_name}', '${fields.service_wefund}', '${fields.service_charity}')`;

  console.log(sql);

  const result = await executeQuery(sql);
  console.log(result)
  res.status(200).json({ data: result });
}
