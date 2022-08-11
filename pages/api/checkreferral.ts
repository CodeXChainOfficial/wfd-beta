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

export async function executeQuery(query, values) {
  try {
    const results = await db.query(query, values);
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
  // const sql =
  //   "Select count(base) as referralCount from Referral where base='" +
  //   "123" +
  //   "'";

  // executeQuery(sql, "").then((res) => {
  //   console.log(res);
  // });
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
  res.status(200).json({});
  // const form = new formidable.IncomingForm();
  // form.parse(req, async function (err, fields, files) {
  //   console.log(err);
  //   console.log(fields);
  //   console.log(files);

  //   res.status(200).json({ text: "Hello" });

  //     if(fields.base != ''){
  //       var sql = "Select * from Referral where base='" + fields.base + "' and referred='" + fields.referred + "'";
  //       await new Promise((res, rej) => {
  //         con.query(sql, async function (err, result) {
  //           if(err) rej(err)
  //           if (result.length == 0){
  //             sql = "INSERT INTO Referral (base, referred) VALUES ('" + fields.base + "', '" +
  //               fields.referred + "')";
  //             con.query(sql, function (err, result) {
  //               if(err) rej(err)
  //               res(result)
  //             });
  //           }
  //           res(result);
  //         })
  //       })
  //     }
  //     sql = "Select count(base) as referralCount from Referral where base='" + fields.referred + "'";
  //     con.query(sql, function(err, result){
  //       if (err){
  //         res.json({ status: "success", data: '0'});
  //         return;
  //       }
  //       res.json({
  //         status: "success",
  //         data: result[0].referralCount,
  //       });
  //     })
  //   }
  //   });
  // });
}
