import { kv } from "@vercel/kv";
import bcrypt from "bcrypt";

export const POST = async (req: Request) => {
  try {
    const { email, password } = await req.json();

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Store username and hashed password in KVS
    const credentials = await kv.set(`user_${email}`, hashedPassword);

    console.log(credentials);

    if (credentials !== "OK") {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Something went wrong when trying to create a user",
        })
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "User registered successfully",
      })
    );
  } catch (error) {
    return new Response("Internal server error");
  }
};
