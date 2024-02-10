/**
 * ENDPOINTS (BACKEND)
 */

import { redirect } from "next/navigation";

/**
 * GET /api/auth
 */
export const GET = async (req: Request) => {
  const [url, token] = req.url.split("=");

  console.log("TOKEN:", token);

  redirect("/?" + req.url); // ? = query
};

// https://localhost:3000/api/auth?code=AQDIUs0NSOFyV-YiJoJY6JDny_xrwZQCz7esZYA5XTx5SwV9y8ox690OEqgldcTQzetnb2TIPciqKCHz7woioPATUxi3Q6OrsFf-DsikKIMpS_nCIo3vpIsBjG4QyPGcyJvReiGK1JkHlOMBQSILdpb7te2WiASjwhrXLM71a6Dys4g5VL5GVXxYgFtHaQOiuTN2exuRi1ezzLaSd-3-69BjqVF7FZbiB4xrRItGa8fwLg
