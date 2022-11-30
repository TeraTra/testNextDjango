import  { NextApiRequest, NextApiResponse  } from 'next';
import { promisify } from "util";
import bodyParser from "body-parser"

const getBody = promisify(bodyParser.urlencoded());


export async function index(req: NextApiRequest, res: NextApiResponse ) {
  if (req.method === "POST") {
    await getBody(req, res);
  }

  return {
    props: {
      title: req.body.title,
      details: req.body.details,
    }
  };
}