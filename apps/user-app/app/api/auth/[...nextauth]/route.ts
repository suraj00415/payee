import NextAuth from "next-auth";
import { Auth_Options } from "../../../lib/auth";

const handler = NextAuth(Auth_Options)
export { handler as GET, handler as POST }
