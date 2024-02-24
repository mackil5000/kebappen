import { kv } from "@vercel/kv";
import { cookies } from "next/headers";

export async function validateToken() {
  // return early if required cookies are missing
  if (!cookies().has("currentUserEmail") && !cookies().has("sessionToken")) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  const currentUserEmail = cookies().get("currentUserEmail").value;
  const currentUserSessionToken = cookies().get("sessionToken").value;
  const storedToken = await kv.get(`user_${currentUserEmail}_session`);

  if (currentUserSessionToken === storedToken) {
    return {
      success: true,
      message: "User is authenticated",
    };
  } else {
    return {
      success: false,
      message: "Unauthorized",
    };
  }
}
