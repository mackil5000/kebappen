import { kv } from "@vercel/kv";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid"; //

export const POST = async (req: Request) => {
  try {
    const { email, password } = await req.json();

    // Retrieve the hashed password from KVS
    const storedHashedPassword = await kv.get<string>(`user_${email}`);

    if (!storedHashedPassword) {
      return new Response(
        JSON.stringify({ message: "Authentication failed", success: false })
      );
    }

    // Compare the provided password with the stored hash
    const match = bcrypt.compare(password, storedHashedPassword);

    if (match) {
      // Passwords match, create and return a session token
      const sessionToken = uuidv4();
      await kv.set(`user_${email}_session`, sessionToken, { ex: 86400 }); // expire token after 24h

      cookies().set({
        name: "sessionToken",
        value: sessionToken,
        httpOnly: true,
        path: "/",
        maxAge: 86400,
        secure: true,
        sameSite: "strict",
      });
      cookies().set({
        name: "currentUserEmail",
        value: email,
        httpOnly: true,
        path: "/",
        maxAge: 86400,
        secure: true,
        sameSite: "strict",
      });

      return new Response(
        JSON.stringify({ message: "Authentication successful", success: true }),
        {
          status: 200,
        }
      );
    } else {
      return new Response(
        JSON.stringify({ message: "Authentication failed", success: false })
      );
    }
  } catch (error) {
    return new Response("Internal server error");
  }
};
