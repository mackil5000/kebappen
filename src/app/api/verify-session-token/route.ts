import { kv } from "@vercel/kv";
import { cookies } from "next/headers";

export const GET = async (req: Request) => {
  // return early if required cookies are missing
  if (!cookies().has("currentUserEmail") && !cookies().has("sessionToken")) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Unauthorized",
      })
    );
  }

  const currentUserEmail = cookies().get("currentUserEmail").value;
  const currentUserSessionToken = cookies().get("sessionToken").value;
  const storedToken = await kv.get(`user_${currentUserEmail}_session`);

  if (currentUserSessionToken === storedToken) {
    return new Response(
      JSON.stringify({
        success: true,
        message: "User is authenticated",
      })
    );
  }
};
