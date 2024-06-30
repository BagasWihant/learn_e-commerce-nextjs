import type { NextApiRequest, NextApiResponse } from "next";
import { signUp } from "@/lib/firebase/service";

export default async function hanlder(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    await signUp(req.body, (status: boolean) => {
      if (status)
        return res.status(200).json({
          status: true,
          statusCode: 200,
          message: "Sign up success",
        });

      return res.status(400).json({
        status: false,
        statusCode: 400,
        message: "Failed to sign up",
      });
    });
  }

  return res.status(405).json({
    status: false,
    statusCode: 405,
    message: "Method not allowed",
  });
}
