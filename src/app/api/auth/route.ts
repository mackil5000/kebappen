/**
 * ENDPOINTS (BACKEND)
 */

import { redirect } from "next/navigation";

const ACCESS_TOKEN_URL = "https://api.instagram.com/oauth/access_token";

/**
 * GET /api/auth
 */
export const GET = async (req: Request) => {
  const [url, token] = req.url.split("=");

  console.log("TOKEN:", token);

  const tokenResponse = await fetch(
    "https://api.instagram.com/oauth/access_token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: process.env.INSTAGRAM_APP_ID,
        client_secret: process.env.INSTAGRAM_CLIENT_SECRET,
        grant_type: "authorization_code",
        redirect_uri: process.env.INSTAGRAM_REDIRECT_URI,
        token,
      }),
    }
  );

  redirect("/home?code=" + token); // ? = query
};

// https://localhost:3000/api/auth?code=AQDIUs0NSOFyV-YiJoJY6JDny_xrwZQCz7esZYA5XTx5SwV9y8ox690OEqgldcTQzetnb2TIPciqKCHz7woioPATUxi3Q6OrsFf-DsikKIMpS_nCIo3vpIsBjG4QyPGcyJvReiGK1JkHlOMBQSILdpb7te2WiASjwhrXLM71a6Dys4g5VL5GVXxYgFtHaQOiuTN2exuRi1ezzLaSd-3-69BjqVF7FZbiB4xrRItGa8fwLg
