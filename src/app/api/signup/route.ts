import { kv } from "@vercel/kv";
import bcrypt from "bcrypt";

export const POST = async (req: Request) => {
  try {
    const { email, password } = await req.json();

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Store username and hashed password in KVS
    await kv.set(`user_${email}`, hashedPassword);

    return new Response("User registered successfully");
  } catch (error) {
    return new Response("Internal server error");
  }
};
