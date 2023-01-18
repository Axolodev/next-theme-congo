import { promises as fs } from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { src } = req.query;
  const filePath = path.join(process.cwd(), src as string);
  try {
    const content = await fs.readFile(filePath);

    res.setHeader("Content-Type", "image/jpeg");
    res.status(200).send(content);
  } catch (err) {
    res.status(404).send("Not found");
  }
};

export default handler;
